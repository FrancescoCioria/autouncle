import * as scrapeIt from "scrape-it";
import fetch from "node-fetch";
import * as queryString from "query-string";
import { groupBy, values, flatten, mapValues, sortBy } from "lodash";
import { Car, ObjectOmit } from "../web/src/model";

type ScrapedCard = ObjectOmit<Car, "price"> & {
  price: string;
};

type OpenCageDataResult = {
  components: { _type: "village" | "neighbourhood" | "city" };
  formatted: string;
  confidence: number;
  geometry: {
    lat: number;
    lng: number;
  };
};

export default () => {
  return scrapeIt<{ cars: ScrapedCard[] }>(
    {
      url: "https://www.autouncle.it/it/auto-preferite",
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "accept-language": "en-US,en;q=0.9,es;q=0.8,fr;q=0.7,it;q=0.6",
        "cache-control": "max-age=0",
        "upgrade-insecure-requests": "1",
        cookie:
          "auth_token=BAhJIhtDV1hKU2dGV1Z6dUtrM0lUTUE2cVpRBjoGRVQ%3D--44d678096463215dff20c032742d2247ed83e64f;"
      },
      method: "GET"
    },
    {
      cars: {
        listItem: ".item_row",
        data: {
          name: ".car_details .center .facts > h3",
          address: ".cell.location",
          engine: ".cell.engine.motor",
          year: ".cell.year",
          km: ".cell.km",
          price: ".cell.price",
          image: {
            selector: ".cell.picture > img",
            attr: "src"
          },
          url: {
            selector: ".car_details .location_info > h3 span",
            attr: "data-js-outgoing-url"
          }
        }
      }
    }
  )
    .then(res => res.data.cars.filter(car => car.name.length > 0))
    .then(
      (cars): Car[] =>
        cars.map(c => {
          const price = parseFloat(c.price);
          return {
            ...c,
            price: c.price.includes(".") ? price * 1000 : price
          };
        })
    )
    .then(cars => {
      return Promise.all(
        cars.map(car => {
          const query = queryString.stringify({
            q: car.address,
            key: "55f3c34bb9a3424d96a72154deca11ea",
            no_annotations: 1,
            language: "en"
          });
          return fetch(`https://api.opencagedata.com/geocode/v1/json?${query}`)
            .then(
              res => res.json() as Promise<{ results: OpenCageDataResult[] }>
            )
            .then(res => {
              const results = res.results.filter(
                r =>
                  r.formatted !== "Milano, Bergamo, Italy" &&
                  (r.components._type === "village" ||
                    r.components._type === "city" ||
                    r.components._type === "neighbourhood")
              );

              const highestConfidence = results.reduce(
                (acc, res) => (res.confidence > acc ? res.confidence : acc),
                0
              );

              const sortingMap = { neighbourhood: -1, village: 0, city: 1 };

              const coordinates = sortBy(
                results.filter(r => r.confidence === highestConfidence),
                r => sortingMap[r.components._type]
              )[0].geometry;

              return { ...car, coordinates };
            });
        })
      );
    })
    .then(cars => {
      const carsGroupedByCoordinates = groupBy(cars, c =>
        JSON.stringify(c.coordinates)
      );

      return flatten(
        values(
          mapValues(carsGroupedByCoordinates, cars => {
            if (cars.length === 1) {
              return cars;
            }

            return cars.map(c => ({
              ...c,
              coordinates: {
                lat:
                  c.coordinates.lat +
                  (Math.random() < 0.5 ? 1 : -1) * Math.random() * 0.01,
                lng:
                  c.coordinates.lng +
                  (Math.random() < 0.5 ? 1 : -1) * Math.random() * 0.01
              }
            }));
          })
        )
      );
    })
    .then(cars => sortBy(cars, "price"));
};

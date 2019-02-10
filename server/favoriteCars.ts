import * as scrapeIt from "scrape-it";
import { groupBy, values, flatten, mapValues, sortBy } from "lodash";
import {
  addCoordinatesToCars,
  parsePrice,
  addDistance,
  addHostnameToUrl,
  getId
} from "./utils";
import { ScrapedCar, Car } from "./model";

let cachedFavoriteCars: Car[] = [];

const updateFavoriteCars = (): void => {
  scrapeIt<{ cars: ScrapedCar[] }>(
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
          brand: ".car_name > a > b",
          address: ".cell.location",
          engine: ".cell.engine.motor",
          year: ".cell.year",
          km: ".cell.km",
          price: {
            selector: ".cell.price",
            convert: parsePrice
          },
          image: {
            selector: ".cell.picture > img",
            attr: "src"
          },
          id: {
            selector: ".cell.picture > img",
            attr: "src",
            convert: getId
          },
          url: {
            selector: ".car_details .location_info > h3 span",
            attr: "data-js-outgoing-url",
            convert: addHostnameToUrl
          }
        }
      }
    }
  )
    .then(res => res.data.cars.filter(car => car.name.length > 0))
    .then(addCoordinatesToCars)
    .then(addDistance)
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
              coordinates: c.coordinates
                ? {
                    lat:
                      c.coordinates.lat +
                      (Math.random() < 0.5 ? 1 : -1) * Math.random() * 0.01,
                    lng:
                      c.coordinates.lng +
                      (Math.random() < 0.5 ? 1 : -1) * Math.random() * 0.01
                  }
                : null
            }));
          })
        )
      );
    })
    .then(cars => sortBy(cars, "price"))
    .then(cars => {
      cachedFavoriteCars = cars;
    });
};

updateFavoriteCars();

setInterval(updateFavoriteCars, 30000); // every 30 seconds

export default () => Promise.resolve(cachedFavoriteCars);

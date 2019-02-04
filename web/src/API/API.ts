import {
  Content,
  GeoJSONFeatureCollection,
  GeoJSONFeature,
  FavoriteCar,
  Route,
  ScrapedFavoriteCar
} from "model";
import flatten = require("lodash/flatten");
import groupBy = require("lodash/groupBy");
import values = require("lodash/values");
import mapValues = require("lodash/mapValues");
import sortBy = require("lodash/sortBy");
import * as scrapeIt from "scrape-it";

type FileContent = Content & { type: "file" };

function getGeoJSONs(contents: Content[]): Promise<GeoJSONFeatureCollection[]> {
  const folders = contents.filter(c => c.type === "dir");
  if (folders.length > 0) {
    return Promise.all(
      folders.map(f => fetch(f.url).then(r => r.json()) as Promise<Content>)
    )
      .then(flatten)
      .then(getGeoJSONs);
  } else {
    const files = contents.filter(
      c => c.type === "file" && c.name.includes(".geojson")
    ) as FileContent[];

    return Promise.all(
      files.map(f =>
        fetch(f.download_url)
          .then(r => r.json() as Promise<GeoJSONFeatureCollection>)
          .then(x => ({
            ...x,
            features: [
              {
                ...x.features[0],
                properties: {
                  ...x.features[0].properties,
                  url: f.html_url
                }
              }
            ]
          }))
      )
    );
  }
}

export const getRoutes = (): Promise<GeoJSONFeature[]> => {
  return fetch("https://api.github.com/repos/BikeRoutes/Milano/contents")
    .then(res => res.json())
    .then(getGeoJSONs)
    .then(geoJSONs => geoJSONs.map(route => route.features[0]));
};

export const getSearchResults = (): Promise<any> => {
  return fetch(
    "https://otcybcnpcfjrvwkzhm.our.buildo.io/https://www.autouncle.it/en/cars_search/VW/Transporter?s%5Bclose_to_postcode%5D=20143&s%5Bdistance_in_meters%5D=200000&s%5Blatitude%5D=45.4643&s%5Blongitude%5D=9.1895&s%5Bmax_price%5D=10000&s%5Border_by%5D=cars.price+ASC"
  )
    .then(res => res.text())
    .then(res => console.log(res));
};

type OpenCageDataResult = {
  formatted: string;
  components: { _type: string };
  confidence: number;
  geometry: { lat: number; lng: number };
};

const _getFavoriteCars = () => {
  return scrapeIt<{ cars: ScrapedFavoriteCar[] }>(
    {
      url:
        "https://otcybcnpcfjrvwkzhm.our.buildo.io/https://www.autouncle.it/it/auto-preferite",
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "accept-language": "en-US,en;q=0.9,es;q=0.8,fr;q=0.7,it;q=0.6",
        "cache-control": "max-age=0",
        "upgrade-insecure-requests": "1",
        cookie:
          "auth_token=BAhJIhtDV1hKU2dGV1Z6dUtrM0lUTUE2cVpRBjoGRVQ%3D--44d678096463215dff20c032742d2247ed83e64f;",
        origin: "https://www.autouncle.it"
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
      (cars): FavoriteCar[] =>
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
          return fetch(
            `https://otcybcnpcfjrvwkzhm.our.buildo.io/https://api.opencagedata.com/geocode/v1/json?q=${encodeURI(
              car.address
            )}&key=55f3c34bb9a3424d96a72154deca11ea&no_annotations=1&language=en`
          )
            .then(
              res =>
                res.json() as Promise<{
                  results: OpenCageDataResult[];
                }>
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

              const coordinates = (sortBy(
                results.filter(r => r.confidence === highestConfidence),
                r => sortingMap[r.components._type]
              )[0] as OpenCageDataResult).geometry;

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

export const getFavoriteCars = () => {
  return (
    _getFavoriteCars()
      // .then(res => res.json() as Promise<FavoriteCar[]>)
      .then(
        (cars): Route[] =>
          cars.map(car => ({
            id: JSON.stringify(car),
            type: "Feature" as "Feature",
            geometry: {
              type: "LineString" as "LineString",
              coordinates: [
                [
                  car.coordinates ? car.coordinates.lng : 0,
                  car.coordinates ? car.coordinates.lat : 0,
                  0
                ] as [number, number, number]
              ]
            },
            properties: {
              ...car,
              color: "#000",
              length: "0",
              elevationGain: 0
            }
          }))
      )
  );
};

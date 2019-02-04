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

export const getFavoriteCars = () => {
  return fetch("http://localhost:1337/localhost:8081/favoriteCars")
    .then(res => res.json() as Promise<FavoriteCar[]>)
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
    );
};

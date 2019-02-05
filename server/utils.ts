import * as queryString from "query-string";
import fetch from "node-fetch";
import { sortBy } from "lodash";
import {
  Car,
  ScrapedCar,
  ScrapedCarWithCoordinates,
  OpenCageDataResult
} from "./model";

type Coordinates = {
  lat: number;
  lng: number;
};
export const haversineFormula = (
  coordinatesA: Coordinates,
  coordinatesB: Coordinates
): number => {
  const toRad = (n: number) => {
    return (n * Math.PI) / 180;
  };

  var R = 6371; // km

  const dLat = toRad(coordinatesB.lat - coordinatesA.lat);
  const dLng = toRad(coordinatesB.lng - coordinatesA.lng);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(coordinatesA.lat)) *
      Math.cos(toRad(coordinatesB.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const addCoordinatesToCars = (
  cars: ScrapedCar[]
): Promise<ScrapedCarWithCoordinates[]> => {
  return Promise.all(
    cars.map(car => {
      const query = queryString.stringify({
        q: car.address,
        key: "55f3c34bb9a3424d96a72154deca11ea",
        no_annotations: 1,
        language: "en"
      });
      return fetch(`https://api.opencagedata.com/geocode/v1/json?${query}`)
        .then(res => res.json() as Promise<{ results: OpenCageDataResult[] }>)
        .then(res => {
          const results = res.results.filter(
            r =>
              r.formatted !== "Milano, Bergamo, Italy" &&
              (r.components._type === "village" ||
                r.components._type === "city" ||
                r.components._type === "neighbourhood")
          );

          if (results.length === 0) {
            return { ...car, coordinates: null };
          }

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
};

export const parsePrice = (price: string): number => {
  return parseInt(
    price
      .replace("€", "")
      .replace(".", "")
      .replace(",", "")
  );
};

const malaga4 = { lat: 45.4443763, lng: 9.1591521 };
const burago = { lat: 45.5915137, lng: 9.374666 };
export const addDistance = (cars: ScrapedCarWithCoordinates[]): Car[] =>
  cars.map(c => {
    return {
      ...c,
      distanceFromMilano: c.coordinates
        ? haversineFormula(c.coordinates, malaga4)
        : null,
      distanceFromBurago: c.coordinates
        ? haversineFormula(c.coordinates, burago)
        : null
    };
  });

export const addHostnameToUrl = (url: string): string =>
  `https://www.autouncle.it${url}`;

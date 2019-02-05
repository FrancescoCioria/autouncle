import * as queryString from "query-string";
import fetch from "node-fetch";
import { sortBy } from "lodash";
import {
  Car,
  ScrapedCar,
  ScrapedCarWithParsedPrice,
  ScrapedCarWithParsedPriceAndCoordinates,
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
  cars: ScrapedCarWithParsedPrice[]
): Promise<ScrapedCarWithParsedPriceAndCoordinates[]> => {
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
          if (res.results.length === 0) {
            return { ...car, coordinates: null };
          }

          const _results = res.results.filter(
            r =>
              r.formatted !== "Milano, Bergamo, Italy" &&
              (r.components._type === "village" ||
                r.components._type === "city" ||
                r.components._type === "neighbourhood")
          );

          const results = _results.length > 0 ? _results : res.results;

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

export const parsePrice = (
  cars: Array<ScrapedCar>
): ScrapedCarWithParsedPrice[] => {
  return cars.map(car => {
    const price = parseInt(
      car.price
        .replace("€", "")
        .replace(".", "")
        .replace(",", "")
    );

    return {
      ...car,
      price
    };
  });
};

const malaga4 = { lat: 45.4443763, lng: 9.1591521 };
const burago = { lat: 45.5915137, lng: 9.374666 };
export const addDistance = (
  cars: ScrapedCarWithParsedPriceAndCoordinates[]
): Car[] =>
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

export const addHostnameToUrl = (cars: Car[]): Car[] =>
  cars.map(c => ({ ...c, url: `https://www.autouncle.it${c.url}` }));

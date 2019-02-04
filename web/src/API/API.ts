import { Car, Route } from "model";

export const getSearchResults = (): Promise<Car[]> => {
  return fetch("https://shielded-spire-20273.herokuapp.com/searchResults").then(
    res => res.json() as Promise<Car[]>
  );
};

export const getFavoriteCars = () => {
  return fetch("https://shielded-spire-20273.herokuapp.com/favoriteCars")
    .then(res => res.json() as Promise<Car[]>)
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

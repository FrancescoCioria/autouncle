import { Car, Route, routeFromCar } from "model";

export const getSearchResults = (): Promise<Car[]> => {
  return fetch("https://shielded-spire-20273.herokuapp.com/searchResults").then(
    res => res.json() as Promise<Car[]>
  );
};

export const getFavoriteCars = () => {
  return fetch("https://shielded-spire-20273.herokuapp.com/favoriteCars")
    .then(res => res.json() as Promise<Car[]>)
    .then((cars): Route[] => cars.map(routeFromCar));
};

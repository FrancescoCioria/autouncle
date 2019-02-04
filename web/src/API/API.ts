import { FavoriteCar, Route } from "model";

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

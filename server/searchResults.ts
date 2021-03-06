import * as scrapeIt from "scrape-it";
import { flatten, sortBy } from "lodash";
import * as queryString from "query-string";
import { ScrapedCar, Car } from "./model";
import {
  addCoordinatesToCars,
  parsePrice,
  addDistance,
  addHostnameToUrl,
  getId
} from "./utils";

const searches = [
  ["VW", "Transporter"],
  ["VW", "Caravelle"],
  ["Renault", "Trafic"],
  ["Renault", "Master"],
  ["Opel", "Vivaro"],
  ["Opel", "Movano"],
  ["Fiat", "Scudo"],
  ["Fiat", "Ducato"],
  ["Mercedes", "Vito"],
  ["Mercedes", "Sprinter"],
  ["Hyundai", "H-1"],
  ["Hyundai", "H 100"],
  ["Hyundai", "H 200"],
  // ["Nissan", "Vanette"],
  ["Nissan", "Primastar"],
  ["Nissan", "NV200"],
  ["Nissan", "Interstar"],
  ["Peugeot", "Expert"],
  ["Peugeot", "Boxer"],
  ["Citroen", "Jumpy"],
  ["Citroen", "Jumper"],
  ["Ford", "Transit 280S"],
  ["Ford", "Transit", "280"],
  ["Ford", "Transit Tourneo"],
  ["Ford", "Tourneo", "280"],
  ["Kia", "Bongo"],
  ["Mitsubishi", "L300"],
  ["Mitsubishi", "L400"],
  ["Mitsubishi", "Space Gear"],
  ["Mazda", "Bongo"],
  ["Toyota", "HiAce"]
];

const blacklist = [
  // duplicates
  "caf57d15-730c-46d1-a5a5-240c8adb34cc",
  "d938479e-a0fa-4e17-b6b7-6650f79c43ed",
  "c6c2adb7-2e2e-4f80-b431-8037a6e1e368",
  "a8c5b624-6668-47a4-a4aa-b1f0f8fa7055",
  "33889ee5-3ebf-44ca-8586-4b24f0eab9e8",
  "5df90e0c-fb31-4b20-8222-d4e8c3fee719",

  // no roof
  "f7896bb6-e4d2-4215-875c-05b481f3c742",
  "86b97ac1-ea6d-48fd-9448-147d35378a46",
  "1b5973e8-1cef-4a6d-95b1-2d9ad7ae8cd7"
];

const computeSearchUrl = (brand: string, model: string, variant?: string) => {
  const query = queryString.stringify({
    "s[brand]": brand,
    "s[car_model]": model,
    "s[close_to_postcode]": 20143,
    "s[distance_in_meters]": 100000,
    "s[min_price]": 510,
    "s[max_price]": 3000,
    "s[min_year]": 2000,
    "s[order_by]": "cars.price+ASC",
    "s[variant]": variant
  });

  return `https://www.autouncle.it/en/cars_search?${query}`;
};

let cachedSearchResults: Car[] = [];

const updateSearchResults = (): void => {
  Promise.all(
    searches.map(([brand, model, variant]) => {
      return scrapeIt<{ cars: ScrapedCar[] }>(
        {
          url: computeSearchUrl(brand, model, variant),
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
            listItem: ".listing-item",
            data: {
              name:
                ".listing-item-car-details-headline-wrapper > h3 > a > span",
              brand:
                ".listing-item-car-details-headline-wrapper > h3 > a > span > b",
              address: {
                selector: ".car-specification.location > span",
                convert: (address: string) =>
                  address
                    .replace("Dealer,", "")
                    .replace("Private seller,", "")
                    .trim()
              },
              engine: ".car-specification.engine",
              year: ".car-specification.year",
              km: ".car-specification.km",
              price: {
                selector: ".price-container .price",
                convert: parsePrice
              },
              distance: ".car-specification.location > div",
              image: {
                selector: ".car-picture > meta",
                attr: "content"
              },
              id: {
                selector: ".car-picture > meta",
                attr: "content",
                convert: getId
              },
              url: {
                selector: ".listing-item-car-details-headline-wrapper > h3 > a",
                attr: "href",
                convert: addHostnameToUrl
              }
            }
          }
        }
      );
    })
  )
    .then(res => flatten(res.map(r => r.data.cars)).filter(car => car.id))
    .then(cars =>
      cars.filter(
        c =>
          !c.name.toLowerCase().includes("noleggio") &&
          !c.name.toLowerCase().includes("rent") &&
          !blacklist.includes(c.id)
      )
    )
    .then(addCoordinatesToCars)
    .then(addDistance)
    .then(cars =>
      cars.filter(
        c =>
          (c.distanceFromBurago === null || c.distanceFromBurago < 50) &&
          (c.distanceFromMilano === null || c.distanceFromMilano < 50)
      )
    )
    .then(cars => sortBy(cars, "price"))
    .then(cars => {
      cachedSearchResults = cars;
    });
};

updateSearchResults();

setInterval(updateSearchResults, 300000); // every 5 minutes

export default () => Promise.resolve(cachedSearchResults);

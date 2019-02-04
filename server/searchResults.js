const scrapeIt = require("scrape-it");
const { flatten, sortBy } = require("lodash");
const queryString = require("query-string");

const searches = [
  ["VW", "Transporter"],
  ["Renault", "Trafic"],
  ["Opel", "Vivaro"],
  ["Fiat", "Scudo"],
  ["Fiat", "Ducato"],
  ["Mercedes", "Vito"],
  ["Hyundai", "H-1"],
  ["Nissan", "Vanette"],
  ["Peugeot", "Expert"],
  ["Citroen", "Jumpy"],
  ["Ford", "Transit"]
];

const computeSearchUrl = (brand, model) => {
  const query = queryString.stringify({
    "s[brand]": brand,
    "s[car_model]": model,
    "s[close_to_postcode]": 20143,
    "s[distance_in_meters]": 50000,
    "s[min_price]": 510,
    "s[max_price]": 3000,
    "s[order_by]": "cars.price+ASC"
  });

  return `https://www.autouncle.it/en/cars_search?${query}`;
};

module.exports = () => {
  return Promise.all(
    searches.map(([brand, model]) => {
      return scrapeIt(
        {
          url: computeSearchUrl(brand, model),
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
              address: ".car-specification.location > span",
              engine: ".car-specification.engine",
              year: ".car-specification.year",
              km: ".car-specification.km",
              price: ".price-container .price",
              image: {
                selector: ".car-picture > meta",
                attr: "content"
              },
              url: {
                selector: ".listing-item-car-details-headline-wrapper > h3 > a",
                attr: "href"
              }
            }
          }
        }
      );
    })
  )
    .then(res => flatten(res.map(r => r.data.cars)))
    .then(cars =>
      cars.filter(
        c =>
          !c.name.toLowerCase().includes("noleggio") &&
          !c.name.toLowerCase().includes("rent")
      )
    )
    .then(cars =>
      cars.map(c => {
        const price = parseInt(
          c.price
            .replace("€", "")
            .replace(".", "")
            .replace(",", "")
        );
        return {
          ...c,
          url: `https://www.autouncle.it${c.url}`,
          price
        };
      })
    )
    .then(cars => sortBy(cars, "price"));
};

export type ObjectOmit<O, K extends string> = Pick<O, Exclude<keyof O, K>>;

export type ScrapedCar = {
  name: string;
  address: string;
  engine: string;
  year: string;
  km: string;
  image: string;
  url: string;
  price: string;
};

export type ScrapedCarWithParsedPrice = ObjectOmit<ScrapedCar, "price"> & {
  price: number;
};

export type ScrapedCarWithParsedPriceAndCoordinates = ScrapedCarWithParsedPrice & {
  coordinates: {
    lat: number;
    lng: number;
  } | null;
};

export type SearchResultCar = ScrapedCarWithParsedPriceAndCoordinates & {
  distanceFromMilano: number | null;
  distanceFromBurago: number | null;
};

export type Car = ScrapedCarWithParsedPriceAndCoordinates;

export type OpenCageDataResult = {
  components: { _type: "village" | "neighbourhood" | "city" };
  formatted: string;
  confidence: number;
  geometry: {
    lat: number;
    lng: number;
  };
};

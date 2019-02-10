export type ObjectOmit<O, K extends string> = Pick<O, Exclude<keyof O, K>>;

export type ScrapedCar = {
  id: string;
  name: string;
  address: string;
  engine: string;
  year: string;
  km: string;
  image: string;
  url: string;
  price: number;
};

export type ScrapedCarWithCoordinates = ScrapedCar & {
  coordinates: {
    lat: number;
    lng: number;
  } | null;
};

export type Car = ScrapedCarWithCoordinates & {
  distanceFromMilano: number | null;
  distanceFromBurago: number | null;
};

export type OpenCageDataResult = {
  components: { _type: "village" | "neighbourhood" | "city" };
  formatted: string;
  confidence: number;
  geometry: {
    lat: number;
    lng: number;
  };
};

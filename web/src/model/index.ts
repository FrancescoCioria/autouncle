import { HistoryLocation } from "@buildo/bento/data";

export { HistoryLocation };

export type CurrentView = { view: "favoriteCars" } | { view: "searchResults" };

export function locationToView(location: HistoryLocation): CurrentView {
  switch (location.pathname) {
    case "/autouncle/searchResults":
      return { view: "searchResults" };
    default:
      return { view: "favoriteCars" };
  }
}

export function viewToLocation(view: CurrentView): HistoryLocation {
  switch (view.view) {
    case "searchResults":
      return { pathname: "/autouncle/searchResults", search: {} };
    case "favoriteCars":
      return { pathname: "/autouncle/favoriteCars", search: {} };
  }
}

export type Geometry = {
  type: "LineString";
  coordinates: Array<[number, number, number?]>;
};

export type GeoJSONFeature = {
  type: "Feature";
  properties: {
    name: string;
    color: string;
    length: string;
    elevationGain: number;
    url: string;
  } & Car;
  geometry: Geometry;
};
export type GeoJSONFeatureCollection = {
  type: "FeatureCollection";
  features: GeoJSONFeature[];
};

export type Route = GeoJSONFeature & { id: string };

export type Car = {
  name: string;
  address: string;
  engine: string;
  year: string;
  km: string;
  price: number;
  image: string;
  url: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

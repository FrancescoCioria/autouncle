import { HistoryLocation } from "@buildo/bento/data";

export { HistoryLocation };

export type CurrentView = { view: "explorer" };

export function locationToView(location: HistoryLocation): CurrentView {
  switch (location.search.view) {
    default:
      return { view: "explorer" };
  }
}

export function viewToLocation(view: CurrentView): HistoryLocation {
  switch (view.view) {
    case "explorer":
      return { pathname: "/Explorer", search: {} };
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
  } & FavoriteCar;
  geometry: Geometry;
};
export type GeoJSONFeatureCollection = {
  type: "FeatureCollection";
  features: GeoJSONFeature[];
};

export type Route = GeoJSONFeature & { id: string };

export type FavoriteCar = {
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

import { HistoryLocation } from "@buildo/bento/data";
import { Car } from "../../../server/model";
export { Car };

export { HistoryLocation };

export type ObjectOmit<O, K extends string> = Pick<O, Exclude<keyof O, K>>;

export type CurrentView = { view: "favoriteCars" } | { view: "searchResults" };

export function locationToView(location: HistoryLocation): CurrentView {
  switch (location.search.view) {
    case "searchResults":
      return { view: "searchResults" };
    default:
      return { view: "favoriteCars" };
  }
}

export function viewToLocation(view: CurrentView): HistoryLocation {
  switch (view.view) {
    case "searchResults":
      return { pathname: "/autouncle", search: { view: "searchResults" } };
    case "favoriteCars":
      return { pathname: "/autouncle", search: { view: "favoriteCars" } };
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

import { Query, location, available } from "@buildo/bento/data";
import * as API from "API";
import { locationToView, Route } from "model";
import * as stringToColor from "string-to-color";
import * as geoJsonLength from "geojson-length";
import { Option, fromNullable, none, some } from "fp-ts/lib/Option";

export { location };

export const currentView = Query({
  params: {},
  dependencies: { location: location },
  fetch: ({ location }) => Promise.resolve(locationToView(location))
});

export const favoriteCars = Query({
  cacheStrategy: available,
  params: {},
  fetch: (): Promise<Route[]> => API.getFavoriteCars()
});

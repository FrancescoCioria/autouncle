import { Query, location, available } from "@buildo/bento/data";
import * as API from "API";
import { locationToView, Route, Car } from "model";

export { location };

export const currentView = Query({
  params: {},
  dependencies: { location: location },
  fetch: ({ location }) => Promise.resolve(locationToView(location))
});

export const favoriteCars = Query({
  params: {},
  fetch: (): Promise<Route[]> => API.getFavoriteCars()
});

export const searchResults = Query({
  params: {},
  fetch: (): Promise<Car[]> => API.getSearchResults()
});

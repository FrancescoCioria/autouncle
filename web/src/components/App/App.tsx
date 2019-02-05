import * as React from "react";
import * as cx from "classnames";
import { declareQueries, declareCommands } from "@buildo/bento/data";
import { currentView } from "queries";
import { doUpdateLocation } from "commands";
import View from "View";
import Explorer from "Explorer/Explorer";
import SearchResults from "SearchResults/SearchResults";

import "./app.scss";
import { viewToLocation } from "model";

const queries = declareQueries({ currentView });
const commands = declareCommands({ doUpdateLocation });

type Props = typeof queries.Props & typeof commands.Props;

class App extends React.Component<Props> {
  navigateToSearchResults = () => {
    this.props.doUpdateLocation(
      viewToLocation({
        view: "searchResults"
      })
    );
  };

  navigateToFavoriteCars = () => {
    this.props.doUpdateLocation(
      viewToLocation({
        view: "favoriteCars"
      })
    );
  };

  render() {
    if (!this.props.currentView.ready) {
      return null;
    }

    const isFavoriteCars = this.props.currentView.value.view === "favoriteCars";
    const isSearchResults =
      this.props.currentView.value.view === "searchResults";

    return (
      <View className="app" height="100%" column>
        <View shrink={false} className="nav-bar">
          <View
            vAlignContent="center"
            onClick={this.navigateToFavoriteCars}
            className={cx("nav-item", { "is-selected": isFavoriteCars })}
          >
            Preferiti
          </View>
          <View
            vAlignContent="center"
            onClick={this.navigateToSearchResults}
            className={cx("nav-item", { "is-selected": isSearchResults })}
          >
            Ricerca
          </View>
        </View>

        {isFavoriteCars && <Explorer />}
        {isSearchResults && <SearchResults />}
      </View>
    );
  }
}

export default commands(queries(App));

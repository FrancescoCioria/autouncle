import * as React from "react";
import { declareQueries } from "@buildo/bento/data";
import { searchResults } from "queries";
import View from "View";
import { Option, none, some } from "fp-ts/lib/Option";
import TextOverflow from "TextOverflow/TextOverflow";

import "./searchResults.scss";

const queries = declareQueries({ searchResults });

type Props = typeof queries.Props;

class SearchResults extends React.Component<Props> {
  map: Option<mapboxgl.Map> = none;

  render() {
    const cars = this.props.searchResults;
    if (!cars.ready) {
      return null;
    }

    return (
      <View className="search-results" column grow>
        <h2 style={{ marginLeft: 16, marginBottom: 0 }}>
          {cars.value.length} Risultati
        </h2>
        {cars.value.map(car => (
          <View className="car" shrink={false}>
            <img width={184} height={138} src={car.image} />
            <View column>
              <a href={car.url} target="_blank" className="name">
                {car.name}
              </a>
              <View className="property" vAlignContent="bottom" shrink={false}>
                <label>Price</label> {car.price} €
              </View>
              <View className="property" vAlignContent="bottom" shrink={false}>
                <label>Km</label> {car.km}
              </View>
              <View className="property" vAlignContent="bottom" shrink={false}>
                <label>Year</label> {car.year}
              </View>
              <View className="property" vAlignContent="bottom" shrink={false}>
                <label>Engine</label> {car.engine}
              </View>
              <View className="property" vAlignContent="bottom" shrink={false}>
                <label>Address</label>{" "}
                <View
                  style={{ width: "calc(100% - 60px)" }}
                  vAlignContent="bottom"
                >
                  <TextOverflow label={car.address} />
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

export default queries(SearchResults);

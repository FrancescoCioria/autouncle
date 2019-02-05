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
        {cars.value.map(car => {
          const distanceFromMilano = car.distanceFromMilano
            ? `da buildo: ${car.distanceFromMilano.toFixed(0)} km`
            : "";
          const distanceFromBurago = car.distanceFromBurago
            ? `da Burago: ${car.distanceFromBurago.toFixed(0)} km`
            : "";
          const distance =
            distanceFromMilano || distanceFromBurago
              ? `(${distanceFromMilano}, ${distanceFromBurago})`
              : "";

          return (
            <View className="car" shrink={false}>
              <img
                width={233}
                height={175}
                style={{ background: "#eaeaea" }}
                src={car.image}
              />
              <View column>
                <a href={car.url} target="_blank" className="name">
                  {car.name}
                </a>
                <View
                  className="property"
                  vAlignContent="bottom"
                  shrink={false}
                >
                  <label>Prezzo</label> {car.price} €
                </View>
                <View
                  className="property"
                  vAlignContent="bottom"
                  shrink={false}
                >
                  <label>Km</label> {car.km}
                </View>
                <View
                  className="property"
                  vAlignContent="bottom"
                  shrink={false}
                >
                  <label>Anno</label> {car.year}
                </View>
                <View
                  className="property"
                  vAlignContent="bottom"
                  shrink={false}
                >
                  <label>Motore</label> {car.engine}
                </View>
                <View
                  className="property"
                  vAlignContent="bottom"
                  shrink={false}
                >
                  <label>Indirizzo</label>
                  {` ${car.address}`}
                </View>
                <View
                  className="property"
                  vAlignContent="bottom"
                  shrink={false}
                >
                  <label>Da buildo</label>{" "}
                  {car.distanceFromMilano
                    ? `${car.distanceFromMilano.toFixed(0)} km`
                    : "-"}
                </View>
                <View
                  className="property"
                  vAlignContent="bottom"
                  shrink={false}
                >
                  <label>Da Burago</label>{" "}
                  {car.distanceFromBurago
                    ? `${car.distanceFromBurago.toFixed(0)} km`
                    : "-"}
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

export default queries(SearchResults);

import * as React from "react";
import { declareQueries } from "@buildo/bento/data";
import { searchResults } from "queries";
import View from "View";
import Dropdown from "../Dropdown";
import sortBy = require("lodash/sortBy");

import "./searchResults.scss";

const queries = declareQueries({ searchResults });

type Props = typeof queries.Props;

type State = {
  sorting: "price" | "distanceFromMilano" | "distanceFromBurago" | "brand";
};

class SearchResults extends React.Component<Props, State> {
  state: State = {
    sorting: "price"
  };

  render() {
    const cars = this.props.searchResults;
    if (!cars.ready) {
      return null;
    }

    const options: { value: State["sorting"]; label: string }[] = [
      { value: "price", label: "Prezzo" },
      { value: "distanceFromMilano", label: "Distanza da buildo" },
      { value: "distanceFromBurago", label: "Distanza da burago" },
      { value: "brand", label: "Brand (a-z)" }
    ];

    const sortedCars = sortBy(cars.value, this.state.sorting);

    return (
      <View className="search-results" column grow>
        <View
          shrink={false}
          vAlignContent="center"
          style={{ paddingLeft: 16, paddingTop: 8 }}
        >
          <h2 style={{ margin: 0, marginRight: 32 }}>
            {cars.value.length} Risultati
          </h2>
          <Dropdown
            style={{ width: 200 }}
            value={this.state.sorting}
            options={options}
            onChange={value =>
              this.setState({ sorting: value as State["sorting"] })
            }
          />
        </View>
        {sortedCars.map(car => {
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
            <View className="car" shrink={false} key={car.url}>
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
              <iframe
                style={{ marginLeft: "auto" }}
                width={350}
                height={199}
                id="gmap_canvas"
                src={`https://maps.google.com/maps?q=${
                  car.coordinates
                    ? `${car.coordinates.lat},${car.coordinates.lng}`
                    : car.address
                }&hl=en&t=&z=9&iwloc=B&output=embed`}
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
              />
            </View>
          );
        })}
      </View>
    );
  }
}

export default queries(SearchResults);

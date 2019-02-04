import * as React from "react";
import * as cx from "classnames";
import View from "View";
import { Route, viewToLocation, FavoriteCar } from "model";
import { Option, some } from "fp-ts/lib/Option";
import Button from "@buildo/bento/components/Button";
import { doUpdateLocation } from "commands";
import { declareCommands } from "react-avenger";

import "./sideBar.scss";
import "@buildo/bento/components/button.scss";
import TextOverflow from "TextOverflow/TextOverflow";

const Route = (props: {
  route: Route;
  onClick: () => void;
  isSelected: boolean;
}) => {
  const properties = props.route.properties;
  return (
    <View
      className={cx("route", { "is-selected": props.isSelected })}
      column
      onClick={props.onClick}
      shrink={false}
    >
      <View
        width="100%"
        height={120}
        style={{
          backgroundImage: `url(${properties.image})`,
          backgroundSize: "cover",
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3
        }}
      />
      <a
        href={`https://www.autouncle.it${properties.url}`}
        target="_blank"
        className="name"
      >
        {properties.name}
      </a>
      <View className="property" vAlignContent="bottom">
        <label>Price</label> {properties.price} €
      </View>
      <View className="property" vAlignContent="bottom">
        <label>Km</label> {properties.km}
      </View>
      <View className="property" vAlignContent="bottom">
        <label>Year</label> {properties.year}
      </View>
      <View className="property" vAlignContent="bottom">
        <label>Engine</label> {properties.engine}
      </View>
      <View className="property" vAlignContent="bottom">
        <label>Address</label>{" "}
        <View style={{ width: "calc(100% - 60px)" }} vAlignContent="bottom">
          <TextOverflow label={properties.address} />
        </View>
      </View>
    </View>
  );
};

const commands = declareCommands({ doUpdateLocation });

type Props = typeof commands.Props & {
  routes: Route[];
  onRouteClick: (route: Route) => void;
  selectedRoute: Option<Route>;
};

class SideBar extends React.Component<Props> {
  render() {
    return (
      <View className="side-bar" column shrink={false}>
        <h2>Routes</h2>
        {this.props.routes.map((route, index) => (
          <Route
            key={index}
            route={route}
            onClick={() => this.props.onRouteClick(route)}
            isSelected={
              this.props.selectedRoute.isSome() &&
              this.props.selectedRoute.value === route
            }
          />
        ))}
      </View>
    );
  }
}

export default commands(SideBar);

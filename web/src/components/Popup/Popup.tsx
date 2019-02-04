import * as React from "react";
import View from "View";
import { Route } from "model";
import TextOverflow from "TextOverflow/TextOverflow";

import "./popup.scss";

export default (props: { route: Route }) => {
  const properties = props.route.properties;
  return (
    <View className="popup" column>
      <View
        width="calc(100% + 36px)"
        height={120}
        style={{
          backgroundImage: `url(${properties.image})`,
          backgroundSize: "cover",
          marginTop: -10,
          marginLeft: -18,
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
        <div style={{ width: "calc(100% - 60px)" }}>
          <TextOverflow label={properties.address} />
        </div>
      </View>
    </View>
  );
};

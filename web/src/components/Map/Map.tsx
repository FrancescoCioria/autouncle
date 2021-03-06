import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import * as ReactDOM from "react-dom";
import throttle = require("lodash/throttle");
import * as mapboxgl from "mapbox-gl";
import Popup from "Popup/Popup";
import Marker from "Marker/Marker";
import View from "View";
import { Option, none, some } from "fp-ts/lib/Option";
import { Route } from "model";
import mobileDetect from "@buildo/bento/utils/mobileDetect";
import { identity } from "fp-ts/lib/function";

import "mapbox-gl/dist/mapbox-gl.css";

const md = mobileDetect();

const popupSettings: mapboxgl.PopupOptions = {
  closeButton: false,
  closeOnClick: false,
  offset: [0, -40],
  anchor: "bottom"
};

export const getRouteDistanceInPixels = (
  route: Route,
  lngLat: mapboxgl.LngLat,
  map: mapboxgl.Map
): number => {
  return route.geometry.coordinates.reduce((acc, coordinates) => {
    const point = map.project(new mapboxgl.LngLat(lngLat.lng, lngLat.lat));
    const routePoint = map.project(
      new mapboxgl.LngLat(coordinates[0], coordinates[1])
    );
    const distance = Math.sqrt(
      Math.pow(Math.abs(point.x - routePoint.x), 2) +
        Math.pow(Math.abs(point.y - routePoint.y), 2)
    );
    return distance < acc ? distance : acc;
  }, Infinity);
};

type Props = {
  routes: Route[];
  selectedRoute: Option<Route>;
  hoveredRoute: Option<Route>;
  onRouteHover: (route: Option<Route>) => void;
  onRouteSelect: (route: Route) => void;
  innerRef: (map: Option<mapboxgl.Map>) => void;
};

class App extends React.PureComponent<Props> {
  map: Option<mapboxgl.Map> = none;
  popupSelectedRoute: mapboxgl.Popup = new mapboxgl.Popup(popupSettings);
  popupHoveredRoute: mapboxgl.Popup = new mapboxgl.Popup(popupSettings);

  initializeMap() {
    (mapboxgl as any).accessToken =
      "pk.eyJ1IjoiZnJhbmNlc2NvY2lvcmlhIiwiYSI6ImNqcThyejR6ODA2ZDk0M25rZzZjcGo4ZmcifQ.yRWHQbG1dJjDp43d01bBOw";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/francescocioria/cjqi3u6lmame92rmw6aw3uyhm",
      center: {
        lat: 45.45,
        lng: 9.2
      },
      zoom: 9.0,
      maxZoom: 11.0
    });

    map.on("load", () => {
      this.map = some(map);

      this.addLayers();
      this.addMarkers();
    });

    if (md.isDesktop) {
      map.on("mousemove", this.onMouseMove);
    }

    map.on("moveend", () => this.props.innerRef(this.map));

    map.addControl(new mapboxgl.FullscreenControl());

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserLocation: true
      })
    );

    map.addControl(
      new mapboxgl.NavigationControl({
        showZoom: md.isDesktop,
        showCompass: !md.isDesktop
      })
    );
  }

  addLayers() {
    this.map.map(map => {
      this.props.routes.forEach(route => {
        const layer: mapboxgl.Layer = {
          id: route.id,
          type: "line",
          source: {
            type: "geojson",
            data: route as any
          },
          layout: {
            "line-join": "round",
            "line-cap": "round"
          }
        };

        map.on("click", layer.id, () => {
          this.props.onRouteSelect(route);
        });

        map.addLayer(layer);
      });
    });
  }

  addMarkers() {
    this.map.map(map => {
      this.props.routes.forEach(route => {
        const coordinates = route.geometry.coordinates[0];

        const element = document.createElement("div");
        ReactDOM.render(
          <Marker onClick={() => this.props.onRouteSelect(route)} />,
          element
        );

        const marker: mapboxgl.Marker = new mapboxgl.Marker({
          element
        }).setLngLat([coordinates[0], coordinates[1]]);

        // const popup = new mapboxgl.Popup({
        //   closeButton: false,
        //   closeOnClick: false,
        //   offset: [0, -40],
        //   anchor: "bottom"
        // }).setHTML(ReactDOMServer.renderToString(<Popup route={route} />));

        // marker.setPopup(popup);

        marker.addTo(map);
      });
    });
  }

  onMouseMove = throttle((e: mapboxgl.MapMouseEvent) => {
    type ClosestRoute = {
      distance: number;
      route: Route;
    };

    this.map.map(map => {
      const closestRoute: ClosestRoute = this.props.routes.reduce(
        (acc, route) => {
          const distance = getRouteDistanceInPixels(route, e.lngLat, map);

          return distance < acc.distance ? { distance, route } : acc;
        },
        { distance: Infinity } as ClosestRoute
      );

      if (closestRoute.distance < 25) {
        this.props.onRouteHover(some(closestRoute.route));
      } else {
        this.props.onRouteHover(none);
      }
    });
  }, 60);

  flyToRoute(route: Route, options?: mapboxgl.FitBoundsOptions) {
    this.map.map(map => {
      const coordinates = route.geometry.coordinates as [number, number][];
      const bounds = coordinates
        .map(coord => new mapboxgl.LngLatBounds(coord, coord))
        .reduce((bounds, coord) => {
          return bounds.extend(coord);
        });

      map.fitBounds(bounds, { padding: 50, ...options });
    });
  }

  showPopup(route: Route, popup: mapboxgl.Popup) {
    this.map.map(map => {
      const latLng: mapboxgl.LngLat = new mapboxgl.LngLat(
        route.geometry.coordinates[0][0],
        route.geometry.coordinates[0][1]
      );

      popup
        .setLngLat(latLng)
        .setHTML(ReactDOMServer.renderToString(<Popup route={route} />))
        .addTo(map);
    });
  }

  updateSelectedRoutePopup() {
    if (this.props.selectedRoute.isSome()) {
      this.showPopup(this.props.selectedRoute.value, this.popupSelectedRoute);
    } else {
      this.popupSelectedRoute.remove();
    }
  }

  updateHoveredRoutePopup() {
    const { hoveredRoute } = this.props;
    if (
      hoveredRoute.isSome() &&
      hoveredRoute.value !== this.props.selectedRoute.fold(null, identity)
    ) {
      this.showPopup(hoveredRoute.value, this.popupHoveredRoute);
    } else {
      this.popupHoveredRoute.remove();
    }
  }

  componentDidMount() {
    this.initializeMap();
    this.props.innerRef(this.map);
  }

  componentDidUpdate(prevProps: Props) {
    this.updateSelectedRoutePopup();
    this.updateHoveredRoutePopup();

    if (
      this.props.selectedRoute.isSome() &&
      (prevProps.selectedRoute.isNone() ||
        prevProps.selectedRoute.value !== this.props.selectedRoute.value)
    ) {
      this.flyToRoute(this.props.selectedRoute.value);
    }
  }

  render() {
    return <View grow id="map" />;
  }
}

export default App;

var webclient=function(e){function t(t){for(var r,l,i=t[0],c=t[1],u=t[2],p=0,f=[];p<i.length;p++)l=i[p],o[l]&&f.push(o[l][0]),o[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={0:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=function(e){return l.p+""+({}[e]||e)+".bundle.c886ab82f06b158d05b0.js"}(e),a=function(t){i.onerror=i.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,l=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:i})},12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/autouncle/",l.oe=function(e){throw console.error(e),e};var i=window.webpackJsonpwebclient=window.webpackJsonpwebclient||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=c;return a.push([334,1]),n()}({145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(756))},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(773),a=n(847);n(849),t.default=function(e){var t=e.label;return r.createElement(o.default,{label:t},function(e){return r.createElement(a.default,{popover:{content:t,attachToBody:!0},style:{width:"100%"}},e)})}},309:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.locationToView=function(e){switch(e.pathname){case"/autouncle/searchResults":return{view:"searchResults"};default:return{view:"favoriteCars"}}},t.viewToLocation=function(e){switch(e.view){case"searchResults":return{pathname:"/autouncle/searchResults",search:{}};case"favoriteCars":return{pathname:"/autouncle/favoriteCars",search:{}}}}},310:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(759))},332:function(e,t){},334:function(e,t,n){"use strict";n.r(t),n.d(t,"main",function(){return c}),n(335);var r=n(2),o=n(71),a=n(342).default,l=n(103).IntlProvider,i=n(889).loadLocale;function c(e){o.render(r.createElement(l,{loadLocale:i,locale:"it"},r.createElement(a,null)),e)}n(890),n(891)},335:function(e,t,n){n(336).polyfill(),n(337)},342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(343);t.default=r.default},343:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=n(32),l=n(53),i=n(145),c=n(310),u=n(50),s=n(765),p=n(864);n(866);var f=n(309),d=l.declareQueries({currentView:i.currentView}),m=l.declareCommands({doUpdateLocation:c.doUpdateLocation}),v=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.navigateToSearchResults=function(){e.props.doUpdateLocation(f.viewToLocation({view:"searchResults"}))},e.navigateToFavoriteCars=function(){e.props.doUpdateLocation(f.viewToLocation({view:"favoriteCars"}))},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){if(!this.props.currentView.ready)return null;var e="favoriteCars"===this.props.currentView.value.view,t="searchResults"===this.props.currentView.value.view;return o.createElement(u.default,{className:"app",height:"100%",column:!0},o.createElement(u.default,{shrink:!1,className:"nav-bar"},o.createElement(u.default,{vAlignContent:"center",onClick:this.navigateToFavoriteCars,className:a("nav-item",{"is-selected":e})},"Preferiti"),o.createElement(u.default,{vAlignContent:"center",onClick:this.navigateToSearchResults,className:a("nav-item",{"is-selected":t})},"Ricerca")),e&&o.createElement(s.default,null),t&&o.createElement(p.default,null))}}]),t}();t.default=m(d(v))},50:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(760);t.default=r.default},756:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(53);t.location=r.location;var o=n(757),a=n(309);t.currentView=r.Query({params:{},dependencies:{location:r.location},fetch:function(e){var t=e.location;return Promise.resolve(a.locationToView(t))}}),t.favoriteCars=r.Query({cacheStrategy:r.available,params:{},fetch:function(){return o.getFavoriteCars()}}),t.searchResults=r.Query({cacheStrategy:r.available,params:{},fetch:function(){return o.getSearchResults()}})},757:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(758))},758:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0}),t.getSearchResults=function(){return fetch("https://shielded-spire-20273.herokuapp.com/searchResults").then(function(e){return e.json()})},t.getFavoriteCars=function(){return fetch("https://shielded-spire-20273.herokuapp.com/favoriteCars").then(function(e){return e.json()}).then(function(e){return e.map(function(e){return{id:JSON.stringify(e),type:"Feature",geometry:{type:"LineString",coordinates:[[e.coordinates?e.coordinates.lng:0,e.coordinates?e.coordinates.lat:0,0]]},properties:r({},e,{color:"#000",length:"0",elevationGain:0})}})})}},759:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(53);t.doUpdateLocation=r.doUpdateLocation},760:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(761);t.default=r.default},765:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=n(53),l=n(145),i=n(50),c=n(766),u=n(860),s=n(155);n(863);var p=a.declareQueries({favoriteCars:l.favoriteCars}),f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.map=s.none,e.state={selectedRoute:s.none,hoveredRoute:s.none},e.onRouteSelect=function(t){e.setState({selectedRoute:e.state.selectedRoute.isSome()&&e.state.selectedRoute.value===t?s.none:s.some(t)})},e.onRouteHover=function(t){e.setState({hoveredRoute:t})},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this,t=this.props.favoriteCars;return t.ready?o.createElement(i.default,{className:"explorer",grow:!0},o.createElement(u.default,{routes:t.value,onRouteClick:this.onRouteSelect,selectedRoute:this.state.selectedRoute}),o.createElement(c.default,{routes:t.value,selectedRoute:this.state.selectedRoute,hoveredRoute:this.state.hoveredRoute,onRouteHover:this.onRouteHover,onRouteSelect:this.onRouteSelect,innerRef:function(t){e.map=t,e.forceUpdate()}})):null}}]),t}();t.default=p(f)},766:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),l=n(767),i=n(71),c=n(769),u=n(771),s=n(772),p=n(851),f=n(50),d=n(155),m=n(102),v=n(38);n(859);var h=m.default(),y={closeButton:!1,closeOnClick:!1,offset:[0,-40],anchor:"bottom"};t.getRouteDistanceInPixels=function(e,t,n){return e.geometry.coordinates.reduce(function(e,r){var o=n.project(new u.LngLat(t.lng,t.lat)),a=n.project(new u.LngLat(r[0],r[1])),l=Math.sqrt(Math.pow(Math.abs(o.x-a.x),2)+Math.pow(Math.abs(o.y-a.y),2));return l<e?l:e},1/0)};var b=function(e){function n(){!function(e,t){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return e.map=d.none,e.popupSelectedRoute=new u.Popup(y),e.popupHoveredRoute=new u.Popup(y),e.onMouseMove=c(function(n){e.map.map(function(r){var o=e.props.routes.reduce(function(e,o){var a=t.getRouteDistanceInPixels(o,n.lngLat,r);return a<e.distance?{distance:a,route:o}:e},{distance:1/0});o.distance<25?e.props.onRouteHover(d.some(o.route)):e.props.onRouteHover(d.none)})},60),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,a.PureComponent),o(n,[{key:"initializeMap",value:function(){var e=this;u.accessToken="pk.eyJ1IjoiZnJhbmNlc2NvY2lvcmlhIiwiYSI6ImNqcThyejR6ODA2ZDk0M25rZzZjcGo4ZmcifQ.yRWHQbG1dJjDp43d01bBOw";var t=new u.Map({container:"map",style:"mapbox://styles/francescocioria/cjqi3u6lmame92rmw6aw3uyhm",center:{lat:45.45,lng:9.2},zoom:9,maxZoom:11});t.on("load",function(){e.map=d.some(t),e.addLayers(),e.addMarkers()}),h.isDesktop&&t.on("mousemove",this.onMouseMove),t.on("moveend",function(){return e.props.innerRef(e.map)}),t.addControl(new u.FullscreenControl),t.addControl(new u.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserLocation:!0})),t.addControl(new u.NavigationControl({showZoom:h.isDesktop,showCompass:!h.isDesktop}))}},{key:"getRouteColor",value:function(e){return this.props.selectedRoute.isSome()&&e===this.props.selectedRoute.value||this.props.hoveredRoute.isSome()&&e===this.props.hoveredRoute.value?"#387ddf":e.properties.color}},{key:"addLayers",value:function(){var e=this;this.map.map(function(t){e.props.routes.forEach(function(n){var r={id:n.id,type:"line",source:{type:"geojson",data:n},layout:{"line-join":"round","line-cap":"round"},paint:{"line-width":3,"line-color":e.getRouteColor(n)}};t.on("click",r.id,function(){e.props.onRouteSelect(n)}),t.addLayer(r)})})}},{key:"addMarkers",value:function(){var e=this;this.map.map(function(t){e.props.routes.forEach(function(n){var r=n.geometry.coordinates[0],o=document.createElement("div");i.render(a.createElement(p.default,{onClick:function(){return e.props.onRouteSelect(n)}}),o),new u.Marker({element:o}).setLngLat([r[0],r[1]]).addTo(t)})})}},{key:"updateLayers",value:function(){var e=this;this.map.map(function(t){e.props.routes.forEach(function(n){t.setPaintProperty(n.id,"line-color",e.getRouteColor(n))})})}},{key:"flyToRoute",value:function(e,t){this.map.map(function(n){var o=e.geometry.coordinates.map(function(e){return new u.LngLatBounds(e,e)}).reduce(function(e,t){return e.extend(t)});n.fitBounds(o,r({padding:50},t))})}},{key:"showPopup",value:function(e,t){this.map.map(function(n){var r=new u.LngLat(e.geometry.coordinates[0][0],e.geometry.coordinates[0][1]);t.setLngLat(r).setHTML(l.renderToString(a.createElement(s.default,{route:e}))).addTo(n)})}},{key:"updateSelectedRoutePopup",value:function(){this.props.selectedRoute.isSome()?this.showPopup(this.props.selectedRoute.value,this.popupSelectedRoute):this.popupSelectedRoute.remove()}},{key:"updateHoveredRoutePopup",value:function(){var e=this.props.hoveredRoute;e.isSome()&&e.value!==this.props.selectedRoute.fold(null,v.identity)?this.showPopup(e.value,this.popupHoveredRoute):this.popupHoveredRoute.remove()}},{key:"componentDidMount",value:function(){this.initializeMap(),this.props.innerRef(this.map)}},{key:"componentDidUpdate",value:function(e){this.updateLayers(),this.updateSelectedRoutePopup(),this.updateHoveredRoutePopup(),this.props.selectedRoute.isSome()&&(e.selectedRoute.isNone()||e.selectedRoute.value!==this.props.selectedRoute.value)&&this.flyToRoute(this.props.selectedRoute.value)}},{key:"render",value:function(){return a.createElement(f.default,{grow:!0,id:"map"})}}]),n}();t.default=b},772:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(50),a=n(146);n(850),t.default=function(e){var t=e.route.properties;return r.createElement(o.default,{className:"popup",column:!0},r.createElement(o.default,{width:"calc(100% + 36px)",height:120,style:{backgroundImage:"url("+t.image+")",backgroundSize:"cover",marginTop:-10,marginLeft:-18,borderTopLeftRadius:3,borderTopRightRadius:3}}),r.createElement("a",{href:t.url,target:"_blank",className:"name"},t.name),r.createElement(o.default,{className:"property",vAlignContent:"bottom"},r.createElement("label",null,"Price")," ",t.price," €"),r.createElement(o.default,{className:"property",vAlignContent:"bottom"},r.createElement("label",null,"Km")," ",t.km),r.createElement(o.default,{className:"property",vAlignContent:"bottom"},r.createElement("label",null,"Year")," ",t.year),r.createElement(o.default,{className:"property",vAlignContent:"bottom"},r.createElement("label",null,"Engine")," ",t.engine),r.createElement(o.default,{className:"property",vAlignContent:"bottom"},r.createElement("label",null,"Address")," ",r.createElement("div",{style:{width:"calc(100% - 60px)"}},r.createElement(a.default,{label:t.address}))))}},850:function(e,t,n){},851:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.default=function(e){return r.createElement("svg",{height:"41px",width:"27px",viewBox:"0 0 27 41",onClick:e.onClick,className:"marker",style:{cursor:"pointer",marginTop:"-100%"}},r.createElement("g",{fillRule:"nonzero"},r.createElement("g",{transform:"translate(3.0, 29.0)",fill:"#000000"},r.createElement("ellipse",{opacity:"0.04",cx:"10.5",cy:"5.80029008",rx:"10.5",ry:"5.25002273"}),r.createElement("ellipse",{opacity:"0.04",cx:"10.5",cy:"5.80029008",rx:"10.5",ry:"5.25002273"}),r.createElement("ellipse",{opacity:"0.04",cx:"10.5",cy:"5.80029008",rx:"9.5",ry:"4.77275007"}),r.createElement("ellipse",{opacity:"0.04",cx:"10.5",cy:"5.80029008",rx:"8.5",ry:"4.29549936"}),r.createElement("ellipse",{opacity:"0.04",cx:"10.5",cy:"5.80029008",rx:"7.5",ry:"3.81822308"}),r.createElement("ellipse",{opacity:"0.04",cx:"10.5",cy:"5.80029008",rx:"6.5",ry:"3.34094679"}),r.createElement("ellipse",{opacity:"0.04",cx:"10.5",cy:"5.80029008",rx:"5.5",ry:"2.86367051"}),r.createElement("ellipse",{opacity:"0.04",cx:"10.5",cy:"5.80029008",rx:"4.5",ry:"2.38636864"})),r.createElement("g",{fill:"#3FB1CE"},r.createElement("path",{d:"M27,13.5 C27,19.074644 20.250001,27.000002 14.75,34.500002 C14.016665,35.500004 12.983335,35.500004 12.25,34.500002 C6.7499993,27.000002 0,19.222562 0,13.5 C0,6.0441559 6.0441559,0 13.5,0 C20.955844,0 27,6.0441559 27,13.5 Z"})),r.createElement("g",{opacity:"0.25",fill:"#000000"},r.createElement("path",{d:"M13.5,0 C6.0441559,0 0,6.0441559 0,13.5 C0,19.222562 6.7499993,27 12.25,34.5 C13,35.522727 14.016664,35.500004 14.75,34.5 C20.250001,27 27,19.074644 27,13.5 C27,6.0441559 20.955844,0 13.5,0 Z M13.5,1 C20.415404,1 26,6.584596 26,13.5 C26,15.898657 24.495584,19.181431 22.220703,22.738281 C19.945823,26.295132 16.705119,30.142167 13.943359,33.908203 C13.743445,34.180814 13.612715,34.322738 13.5,34.441406 C13.387285,34.322738 13.256555,34.180814 13.056641,33.908203 C10.284481,30.127985 7.4148684,26.314159 5.015625,22.773438 C2.6163816,19.232715 1,15.953538 1,13.5 C1,6.584596 6.584596,1 13.5,1 Z"})),r.createElement("g",{transform:"translate(6.0, 7.0)",fill:"#FFFFFF"}),r.createElement("g",{transform:"translate(8.0, 8.0)"},r.createElement("circle",{fill:"#000000",opacity:"0.25",cx:"5.5",cy:"5.5",r:"5.4999962"}),r.createElement("circle",{fill:"#FFFFFF",cx:"5.5",cy:"5.5",r:"5.4999962"}))))}},860:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=n(32),l=n(50),i=n(310),c=n(156),u=n(146);n(861),n(862);var s=function(e){var t=e.route.properties;return o.createElement(l.default,{className:a("route",{"is-selected":e.isSelected}),column:!0,onClick:e.onClick,shrink:!1},o.createElement(l.default,{width:"100%",height:120,style:{backgroundImage:"url("+t.image+")",backgroundSize:"cover",borderTopLeftRadius:3,borderTopRightRadius:3}}),o.createElement("a",{href:t.url,target:"_blank",className:"name"},t.name),o.createElement(l.default,{className:"property",vAlignContent:"bottom"},o.createElement("label",null,"Price")," ",t.price," €"),o.createElement(l.default,{className:"property",vAlignContent:"bottom"},o.createElement("label",null,"Km")," ",t.km),o.createElement(l.default,{className:"property",vAlignContent:"bottom"},o.createElement("label",null,"Year")," ",t.year),o.createElement(l.default,{className:"property",vAlignContent:"bottom"},o.createElement("label",null,"Engine")," ",t.engine),o.createElement(l.default,{className:"property",vAlignContent:"bottom"},o.createElement("label",null,"Address")," ",o.createElement(l.default,{style:{width:"calc(100% - 60px)"},vAlignContent:"bottom"},o.createElement(u.default,{label:t.address}))))},p=c.declareCommands({doUpdateLocation:i.doUpdateLocation}),f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this;return o.createElement(l.default,{className:"side-bar",column:!0,shrink:!1},this.props.routes.map(function(t,n){return o.createElement(s,{key:n,route:t,onClick:function(){return e.props.onRouteClick(t)},isSelected:e.props.selectedRoute.isSome()&&e.props.selectedRoute.value===t})}))}}]),t}();t.default=p(f)},861:function(e,t,n){},863:function(e,t,n){},864:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=n(53),l=n(145),i=n(50),c=n(155),u=n(146);n(865);var s=a.declareQueries({searchResults:l.searchResults}),p=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.map=c.none,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props.searchResults;return e.ready?o.createElement(i.default,{className:"search-results",column:!0,grow:!0},o.createElement("h2",{style:{marginLeft:16,marginBottom:0}},e.value.length," Risultati"),e.value.map(function(e){return o.createElement(i.default,{className:"car",shrink:!1},o.createElement("img",{width:184,height:138,src:e.image}),o.createElement(i.default,{column:!0},o.createElement("a",{href:e.url,target:"_blank",className:"name"},e.name),o.createElement(i.default,{className:"property",vAlignContent:"bottom",shrink:!1},o.createElement("label",null,"Price")," ",e.price," €"),o.createElement(i.default,{className:"property",vAlignContent:"bottom",shrink:!1},o.createElement("label",null,"Km")," ",e.km),o.createElement(i.default,{className:"property",vAlignContent:"bottom",shrink:!1},o.createElement("label",null,"Year")," ",e.year),o.createElement(i.default,{className:"property",vAlignContent:"bottom",shrink:!1},o.createElement("label",null,"Engine")," ",e.engine),o.createElement(i.default,{className:"property",vAlignContent:"bottom",shrink:!1},o.createElement("label",null,"Address")," ",o.createElement(i.default,{style:{width:"calc(100% - 60px)"},vAlignContent:"bottom"},o.createElement(u.default,{label:e.address})))))})):null}}]),t}();t.default=s(p)},865:function(e,t,n){},866:function(e,t,n){},880:function(e,t){},886:function(e,t){},889:function(e,t,n){"use strict";n.r(t),n.d(t,"loadLocale",function(){return o});var r=n(103);function o(e){return new Promise(function(t){switch(e){case"it":return Promise.all([n.e(3),n.e(5)]).then(function(){var o=[n(903),n(904)];Object(r.addLocaleDataAndResolve)(e,t).apply(null,o)}.bind(this)).catch(n.oe);case"en":default:return Promise.all([n.e(2),n.e(4)]).then(function(){var o=[n(905),n(906)];Object(r.addLocaleDataAndResolve)(e,t).apply(null,o)}.bind(this)).catch(n.oe)}})}},890:function(e,t,n){"use strict";n.r(t);var r=n(32),o=n(102),a=n.n(o)()(),l=r({"is-desktop":a.isDesktop,"is-tablet":a.isTablet,"is-phone":a.isPhone}),i=document.documentElement||document.body;i.className=r(i.className,l)},891:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(892),n(899),n(901),n(902)},901:function(e,t,n){},902:function(e,t,n){}});
var webclient=function(e){function t(t){for(var r,l,i=t[0],u=t[1],c=t[2],p=0,f=[];p<i.length;p++)l=i[p],o[l]&&f.push(o[l][0]),o[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={0:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=function(e){return l.p+""+({}[e]||e)+".bundle.5f0f11bc060c209c0191.js"}(e),a=function(t){i.onerror=i.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,l=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:i})},12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/autouncle/",l.oe=function(e){throw console.error(e),e};var i=window.webpackJsonpwebclient=window.webpackJsonpwebclient||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=u;return a.push([342,1]),n()}({147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(763))},309:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.locationToView=function(e){switch(e.search.view){case"searchResults":return{view:"searchResults"};default:return{view:"favoriteCars"}}},t.viewToLocation=function(e){switch(e.view){case"searchResults":return{pathname:"/autouncle",search:{view:"searchResults"}};case"favoriteCars":return{pathname:"/autouncle",search:{view:"favoriteCars"}}}}},310:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(766))},312:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(780),a=n(849);n(851),t.default=function(e){var t=e.label;return r.createElement(o.default,{label:t},function(e){return r.createElement(a.default,{popover:{content:t,attachToBody:!0},style:{width:"100%"}},e)})}},340:function(e,t){},342:function(e,t,n){"use strict";n.r(t),n.d(t,"main",function(){return u}),n(343);var r=n(2),o=n(33),a=n(350).default,l=n(103).IntlProvider,i=n(899).loadLocale;function u(e){o.render(r.createElement(l,{loadLocale:i,locale:"it"},r.createElement(a,null)),e)}n(900),n(901)},343:function(e,t,n){n(344).polyfill(),n(345)},350:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(351);t.default=r.default},351:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=n(9),l=n(54),i=n(147),u=n(310),c=n(51),s=n(772),p=n(866);n(876);var f=n(309),d=l.declareQueries({currentView:i.currentView}),m=l.declareCommands({doUpdateLocation:u.doUpdateLocation}),v=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.navigateToSearchResults=function(){e.props.doUpdateLocation(f.viewToLocation({view:"searchResults"}))},e.navigateToFavoriteCars=function(){e.props.doUpdateLocation(f.viewToLocation({view:"favoriteCars"}))},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){if(!this.props.currentView.ready)return null;var e="favoriteCars"===this.props.currentView.value.view,t="searchResults"===this.props.currentView.value.view;return o.createElement(c.default,{className:"app",height:"100%",column:!0},o.createElement(c.default,{shrink:!1,className:"nav-bar"},o.createElement(c.default,{vAlignContent:"center",onClick:this.navigateToFavoriteCars,className:a("nav-item",{"is-selected":e})},"Preferiti"),o.createElement(c.default,{vAlignContent:"center",onClick:this.navigateToSearchResults,className:a("nav-item",{"is-selected":t})},"Ricerca")),e&&o.createElement(s.default,null),t&&o.createElement(p.default,null))}}]),t}();t.default=m(d(v))},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(767);t.default=r.default},763:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(54);t.location=r.location;var o=n(764),a=n(309);t.currentView=r.Query({params:{},dependencies:{location:r.location},fetch:function(e){var t=e.location;return Promise.resolve(a.locationToView(t))}}),t.favoriteCars=r.Query({params:{},fetch:function(){return o.getFavoriteCars()}}),t.searchResults=r.Query({params:{},fetch:function(){return o.getSearchResults()}})},764:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(765))},765:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0}),t.getSearchResults=function(){return fetch("https://shielded-spire-20273.herokuapp.com/searchResults").then(function(e){return e.json()})},t.getFavoriteCars=function(){return fetch("https://shielded-spire-20273.herokuapp.com/favoriteCars").then(function(e){return e.json()}).then(function(e){return e.map(function(e){return{id:JSON.stringify(e),type:"Feature",geometry:{type:"LineString",coordinates:[[e.coordinates?e.coordinates.lng:0,e.coordinates?e.coordinates.lat:0,0]]},properties:r({},e,{color:"#000",length:"0",elevationGain:0})}})})}},766:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(54);t.doUpdateLocation=r.doUpdateLocation},767:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(768);t.default=r.default},772:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=n(54),l=n(147),i=n(51),u=n(773),c=n(862),s=n(335);n(865);var p=a.declareQueries({favoriteCars:l.favoriteCars}),f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.map=s.none,e.state={selectedRoute:s.none,hoveredRoute:s.none},e.onRouteSelect=function(t){e.setState({selectedRoute:e.state.selectedRoute.isSome()&&e.state.selectedRoute.value===t?s.none:s.some(t)})},e.onRouteHover=function(t){e.setState({hoveredRoute:t})},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this,t=this.props.favoriteCars;return t.ready?o.createElement(i.default,{className:"explorer",grow:!0},o.createElement(c.default,{routes:t.value,onRouteClick:this.onRouteSelect,selectedRoute:this.state.selectedRoute}),o.createElement(u.default,{routes:t.value,selectedRoute:this.state.selectedRoute,hoveredRoute:this.state.hoveredRoute,onRouteHover:this.onRouteHover,onRouteSelect:this.onRouteSelect,innerRef:function(t){e.map=t,e.forceUpdate()}})):null}}]),t}();t.default=p(f)},773:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),l=n(774),i=n(33),u=n(776),c=n(778),s=n(779),p=n(853),f=n(51),d=n(335),m=n(102),v=n(39);n(861);var h=m.default(),y={closeButton:!1,closeOnClick:!1,offset:[0,-40],anchor:"bottom"};t.getRouteDistanceInPixels=function(e,t,n){return e.geometry.coordinates.reduce(function(e,r){var o=n.project(new c.LngLat(t.lng,t.lat)),a=n.project(new c.LngLat(r[0],r[1])),l=Math.sqrt(Math.pow(Math.abs(o.x-a.x),2)+Math.pow(Math.abs(o.y-a.y),2));return l<e?l:e},1/0)};var b=function(e){function n(){!function(e,t){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return e.map=d.none,e.popupSelectedRoute=new c.Popup(y),e.popupHoveredRoute=new c.Popup(y),e.onMouseMove=u(function(n){e.map.map(function(r){var o=e.props.routes.reduce(function(e,o){var a=t.getRouteDistanceInPixels(o,n.lngLat,r);return a<e.distance?{distance:a,route:o}:e},{distance:1/0});o.distance<25?e.props.onRouteHover(d.some(o.route)):e.props.onRouteHover(d.none)})},60),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,a.PureComponent),o(n,[{key:"initializeMap",value:function(){var e=this;c.accessToken="pk.eyJ1IjoiZnJhbmNlc2NvY2lvcmlhIiwiYSI6ImNqcThyejR6ODA2ZDk0M25rZzZjcGo4ZmcifQ.yRWHQbG1dJjDp43d01bBOw";var t=new c.Map({container:"map",style:"mapbox://styles/francescocioria/cjqi3u6lmame92rmw6aw3uyhm",center:{lat:45.45,lng:9.2},zoom:9,maxZoom:11});t.on("load",function(){e.map=d.some(t),e.addLayers(),e.addMarkers()}),h.isDesktop&&t.on("mousemove",this.onMouseMove),t.on("moveend",function(){return e.props.innerRef(e.map)}),t.addControl(new c.FullscreenControl),t.addControl(new c.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserLocation:!0})),t.addControl(new c.NavigationControl({showZoom:h.isDesktop,showCompass:!h.isDesktop}))}},{key:"getRouteColor",value:function(e){return this.props.selectedRoute.isSome()&&e===this.props.selectedRoute.value||this.props.hoveredRoute.isSome()&&e===this.props.hoveredRoute.value?"#387ddf":e.properties.color}},{key:"addLayers",value:function(){var e=this;this.map.map(function(t){e.props.routes.forEach(function(n){var r={id:n.id,type:"line",source:{type:"geojson",data:n},layout:{"line-join":"round","line-cap":"round"},paint:{"line-width":3,"line-color":e.getRouteColor(n)}};t.on("click",r.id,function(){e.props.onRouteSelect(n)}),t.addLayer(r)})})}},{key:"addMarkers",value:function(){var e=this;this.map.map(function(t){e.props.routes.forEach(function(n){var r=n.geometry.coordinates[0],o=document.createElement("div");i.render(a.createElement(p.default,{onClick:function(){return e.props.onRouteSelect(n)}}),o),new c.Marker({element:o}).setLngLat([r[0],r[1]]).addTo(t)})})}},{key:"updateLayers",value:function(){var e=this;this.map.map(function(t){e.props.routes.forEach(function(n){t.setPaintProperty(n.id,"line-color",e.getRouteColor(n))})})}},{key:"flyToRoute",value:function(e,t){this.map.map(function(n){var o=e.geometry.coordinates.map(function(e){return new c.LngLatBounds(e,e)}).reduce(function(e,t){return e.extend(t)});n.fitBounds(o,r({padding:50},t))})}},{key:"showPopup",value:function(e,t){this.map.map(function(n){var r=new c.LngLat(e.geometry.coordinates[0][0],e.geometry.coordinates[0][1]);t.setLngLat(r).setHTML(l.renderToString(a.createElement(s.default,{route:e}))).addTo(n)})}},{key:"updateSelectedRoutePopup",value:function(){this.props.selectedRoute.isSome()?this.showPopup(this.props.selectedRoute.value,this.popupSelectedRoute):this.popupSelectedRoute.remove()}},{key:"updateHoveredRoutePopup",value:function(){var e=this.props.hoveredRoute;e.isSome()&&e.value!==this.props.selectedRoute.fold(null,v.identity)?this.showPopup(e.value,this.popupHoveredRoute):this.popupHoveredRoute.remove()}},{key:"componentDidMount",value:function(){this.initializeMap(),this.props.innerRef(this.map)}},{key:"componentDidUpdate",value:function(e){this.updateLayers(),this.updateSelectedRoutePopup(),this.updateHoveredRoutePopup(),this.props.selectedRoute.isSome()&&(e.selectedRoute.isNone()||e.selectedRoute.value!==this.props.selectedRoute.value)&&this.flyToRoute(this.props.selectedRoute.value)}},{key:"render",value:function(){return a.createElement(f.default,{grow:!0,id:"map"})}}]),n}();t.default=b},779:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(51),a=n(312);n(852),t.default=function(e){var t=e.route.properties;return r.createElement(o.default,{className:"popup",column:!0},r.createElement(o.default,{width:"calc(100% + 36px)",height:120,style:{backgroundImage:"url("+t.image+")",backgroundSize:"cover",marginTop:-10,marginLeft:-18,borderTopLeftRadius:3,borderTopRightRadius:3}}),r.createElement("a",{href:t.url,target:"_blank",className:"name"},t.name),r.createElement(o.default,{className:"property",vAlignContent:"bottom"},r.createElement("label",null,"Price")," ",t.price," €"),r.createElement(o.default,{className:"property",vAlignContent:"bottom"},r.createElement("label",null,"Km")," ",t.km),r.createElement(o.default,{className:"property",vAlignContent:"bottom"},r.createElement("label",null,"Year")," ",t.year),r.createElement(o.default,{className:"property",vAlignContent:"bottom"},r.createElement("label",null,"Engine")," ",t.engine),r.createElement(o.default,{className:"property",vAlignContent:"bottom"},r.createElement("label",null,"Address")," ",r.createElement("div",{style:{width:"calc(100% - 60px)"}},r.createElement(a.default,{label:t.address}))))}},852:function(e,t,n){},853:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.default=function(e){return r.createElement("svg",{height:"41px",width:"27px",viewBox:"0 0 27 41",onClick:e.onClick,className:"marker",style:{cursor:"pointer",marginTop:"-100%"}},r.createElement("g",{fillRule:"nonzero"},r.createElement("g",{transform:"translate(3.0, 29.0)",fill:"#000000"},r.createElement("ellipse",{opacity:"0.04",cx:"10.5",cy:"5.80029008",rx:"10.5",ry:"5.25002273"}),r.createElement("ellipse",{opacity:"0.04",cx:"10.5",cy:"5.80029008",rx:"10.5",ry:"5.25002273"}),r.createElement("ellipse",{opacity:"0.04",cx:"10.5",cy:"5.80029008",rx:"9.5",ry:"4.77275007"}),r.createElement("ellipse",{opacity:"0.04",cx:"10.5",cy:"5.80029008",rx:"8.5",ry:"4.29549936"}),r.createElement("ellipse",{opacity:"0.04",cx:"10.5",cy:"5.80029008",rx:"7.5",ry:"3.81822308"}),r.createElement("ellipse",{opacity:"0.04",cx:"10.5",cy:"5.80029008",rx:"6.5",ry:"3.34094679"}),r.createElement("ellipse",{opacity:"0.04",cx:"10.5",cy:"5.80029008",rx:"5.5",ry:"2.86367051"}),r.createElement("ellipse",{opacity:"0.04",cx:"10.5",cy:"5.80029008",rx:"4.5",ry:"2.38636864"})),r.createElement("g",{fill:"#3FB1CE"},r.createElement("path",{d:"M27,13.5 C27,19.074644 20.250001,27.000002 14.75,34.500002 C14.016665,35.500004 12.983335,35.500004 12.25,34.500002 C6.7499993,27.000002 0,19.222562 0,13.5 C0,6.0441559 6.0441559,0 13.5,0 C20.955844,0 27,6.0441559 27,13.5 Z"})),r.createElement("g",{opacity:"0.25",fill:"#000000"},r.createElement("path",{d:"M13.5,0 C6.0441559,0 0,6.0441559 0,13.5 C0,19.222562 6.7499993,27 12.25,34.5 C13,35.522727 14.016664,35.500004 14.75,34.5 C20.250001,27 27,19.074644 27,13.5 C27,6.0441559 20.955844,0 13.5,0 Z M13.5,1 C20.415404,1 26,6.584596 26,13.5 C26,15.898657 24.495584,19.181431 22.220703,22.738281 C19.945823,26.295132 16.705119,30.142167 13.943359,33.908203 C13.743445,34.180814 13.612715,34.322738 13.5,34.441406 C13.387285,34.322738 13.256555,34.180814 13.056641,33.908203 C10.284481,30.127985 7.4148684,26.314159 5.015625,22.773438 C2.6163816,19.232715 1,15.953538 1,13.5 C1,6.584596 6.584596,1 13.5,1 Z"})),r.createElement("g",{transform:"translate(6.0, 7.0)",fill:"#FFFFFF"}),r.createElement("g",{transform:"translate(8.0, 8.0)"},r.createElement("circle",{fill:"#000000",opacity:"0.25",cx:"5.5",cy:"5.5",r:"5.4999962"}),r.createElement("circle",{fill:"#FFFFFF",cx:"5.5",cy:"5.5",r:"5.4999962"}))))}},862:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=n(9),l=n(51),i=n(310),u=n(157),c=n(312);n(863),n(864);var s=function(e){var t=e.route.properties;return o.createElement(l.default,{className:a("route",{"is-selected":e.isSelected}),column:!0,onClick:e.onClick,shrink:!1},o.createElement(l.default,{width:"100%",height:120,style:{backgroundImage:"url("+t.image+")",backgroundSize:"cover",borderTopLeftRadius:3,borderTopRightRadius:3}}),o.createElement("a",{href:t.url,target:"_blank",className:"name"},t.name),o.createElement(l.default,{className:"property",vAlignContent:"bottom"},o.createElement("label",null,"Price")," ",t.price," €"),o.createElement(l.default,{className:"property",vAlignContent:"bottom"},o.createElement("label",null,"Km")," ",t.km),o.createElement(l.default,{className:"property",vAlignContent:"bottom"},o.createElement("label",null,"Year")," ",t.year),o.createElement(l.default,{className:"property",vAlignContent:"bottom"},o.createElement("label",null,"Engine")," ",t.engine),o.createElement(l.default,{className:"property",vAlignContent:"bottom"},o.createElement("label",null,"Address")," ",o.createElement(l.default,{style:{width:"calc(100% - 60px)"},vAlignContent:"bottom"},o.createElement(c.default,{label:t.address}))))},p=u.declareCommands({doUpdateLocation:i.doUpdateLocation}),f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this;return o.createElement(l.default,{className:"side-bar",column:!0,shrink:!1},this.props.routes.map(function(t,n){return o.createElement(s,{key:n,route:t,onClick:function(){return e.props.onRouteClick(t)},isSelected:e.props.selectedRoute.isSome()&&e.props.selectedRoute.value===t})}))}}]),t}();t.default=p(f)},863:function(e,t,n){},865:function(e,t,n){},866:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=n(54),l=n(147),i=n(51),u=n(867),c=n(132);n(875);var s=a.declareQueries({searchResults:l.searchResults}),p=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={sorting:"price"},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this,t=this.props.searchResults;if(!t.ready)return null;var n=c(t.value,this.state.sorting);return o.createElement(i.default,{className:"search-results",column:!0,grow:!0},o.createElement(i.default,{shrink:!1,vAlignContent:"center",style:{paddingLeft:16,paddingTop:8}},o.createElement("h2",{style:{margin:0,marginRight:32}},t.value.length," Risultati"),o.createElement(u.default,{style:{width:200},value:this.state.sorting,options:[{value:"price",label:"Prezzo"},{value:"distanceFromMilano",label:"Distanza da buildo"},{value:"distanceFromBurago",label:"Distanza da burago"},{value:"brand",label:"Brand (a-z)"}],onChange:function(t){return e.setState({sorting:t})}})),n.map(function(e){return e.distanceFromMilano&&e.distanceFromMilano.toFixed(0),e.distanceFromBurago&&e.distanceFromBurago.toFixed(0),o.createElement(i.default,{className:"car",shrink:!1},o.createElement("img",{width:233,height:175,style:{background:"#eaeaea"},src:e.image}),o.createElement(i.default,{column:!0},o.createElement("a",{href:e.url,target:"_blank",className:"name"},e.name),o.createElement(i.default,{className:"property",vAlignContent:"bottom",shrink:!1},o.createElement("label",null,"Prezzo")," ",e.price," €"),o.createElement(i.default,{className:"property",vAlignContent:"bottom",shrink:!1},o.createElement("label",null,"Km")," ",e.km),o.createElement(i.default,{className:"property",vAlignContent:"bottom",shrink:!1},o.createElement("label",null,"Anno")," ",e.year),o.createElement(i.default,{className:"property",vAlignContent:"bottom",shrink:!1},o.createElement("label",null,"Motore")," ",e.engine),o.createElement(i.default,{className:"property",vAlignContent:"bottom",shrink:!1},o.createElement("label",null,"Indirizzo")," "+e.address),o.createElement(i.default,{className:"property",vAlignContent:"bottom",shrink:!1},o.createElement("label",null,"Da buildo")," ",e.distanceFromMilano?e.distanceFromMilano.toFixed(0)+" km":"-"),o.createElement(i.default,{className:"property",vAlignContent:"bottom",shrink:!1},o.createElement("label",null,"Da Burago")," ",e.distanceFromBurago?e.distanceFromBurago.toFixed(0)+" km":"-")))}))}}]),t}();t.default=s(p)},867:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(868);t.default=r.default},868:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(869);n(874),t.default=r.default},874:function(e,t,n){},875:function(e,t,n){},876:function(e,t,n){},890:function(e,t){},896:function(e,t){},899:function(e,t,n){"use strict";n.r(t),n.d(t,"loadLocale",function(){return o});var r=n(103);function o(e){return new Promise(function(t){switch(e){case"it":return Promise.all([n.e(3),n.e(5)]).then(function(){var o=[n(913),n(914)];Object(r.addLocaleDataAndResolve)(e,t).apply(null,o)}.bind(this)).catch(n.oe);case"en":default:return Promise.all([n.e(2),n.e(4)]).then(function(){var o=[n(915),n(916)];Object(r.addLocaleDataAndResolve)(e,t).apply(null,o)}.bind(this)).catch(n.oe)}})}},900:function(e,t,n){"use strict";n.r(t);var r=n(9),o=n(102),a=n.n(o)()(),l=r({"is-desktop":a.isDesktop,"is-tablet":a.isTablet,"is-phone":a.isPhone}),i=document.documentElement||document.body;i.className=r(i.className,l)},901:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(902),n(909),n(911),n(912)},911:function(e,t,n){},912:function(e,t,n){}});
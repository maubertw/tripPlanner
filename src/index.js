//console.log("Hello from JavaScript");
const buildMarker = require('./marker');


const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyeS13YXJyaWNrIiwiYSI6ImNqZXp0cnp4NzBlMXIyd29heHppM2R1ODQifQ.V4xaaHhhwf4cempiwI45VQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

let markerElement = document.createElement("div");
markerElement.style.width = "32px";
markerElement.style.height = "39px";
markerElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";


let flag = new mapboxgl.Marker(markerElement).setLngLat([-87.6354, 41.8885]).addTo(map);

const marker = buildMarker("activities", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);
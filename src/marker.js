const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};
const buildMarker = function(type, cords) {

    let markerElement = document.createElement("div");
    markerElement.style.width = "32px";
    markerElement.style.height = "39px";
    markerElement.style.backgroundImage = "url(" + type + ")";


    return new mapboxgl.Marker(markerElement).setLngLat(cords)


}

module.exports = buildMarker;
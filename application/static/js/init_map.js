var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 9,
  minZoom: 5,
  id: "mapbox.dark",
  accessToken: API_KEY
});

var myMap = L.map("map", {
  center: [
    43.8041, -120.5542
  ],
  zoom: 7,
  layers: [darkmap]
});

function createMap(myMap, counties) {

  var baseMaps = {
    "Dark Map": darkmap
  };

  L.control.layers(baseMaps, counties).addTo(myMap);

  return myMap
}


var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 9,
  minZoom: 5,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 9,
  minZoom: 5,
  id: "mapbox.dark",
  accessToken: API_KEY
});

var myMap = L.map("map", {
  center: [
    43.9792797, -120.737257
    // 45.51179, -122.67563
    // 37.09, -95.71
  ],
  zoom: 7,
  layers: [darkmap]
  // layers: [darkmap, counties]
});

function createMap(myMap) {

  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
    // "Counties": counties
  };

  //   var myMap = L.map("map", {  
  //       center: [
  //         43.9792797,-120.737257
  //         // 45.51179, -122.67563
  //         // 37.09, -95.71
  //       ],
  //       zoom: 7,
  //       layers: [darkmap, streetmap]
  //       // layers: [darkmap, counties]
  // });

  // L.control.layers(baseMaps, overlayMaps, {
  // L.control.layers(baseMaps,  {
  //   collapsed: false
  // }).addTo(myMap);
  L.control.layers(baseMaps).addTo(myMap);

  return myMap
}


createMap(myMap);
// createMap(county_layer, streetmap, darkmap, counties, myMap);
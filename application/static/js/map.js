var geo = {{myGeo}};
console.log(geo)

var myMap = L.map("map", {
  // OREGON
  center: [43.8041, -120.5542],
  // US
  // center: [39.977825662466266, -98.934902125],
  // center: [45.51179, -100.67563],
  zoom: 7,
  maxZoom: 10

  // layers: [streetmap, counties]
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    // Grey background
    // id: "mapbox.grey",
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);

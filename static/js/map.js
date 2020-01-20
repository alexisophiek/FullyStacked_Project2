var counties = data
console.log(counties)

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('p3/FullyStacked2 with map.js is running')
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// var counties = '../data/counties.json'

var myMap = L.map("map", {
  // Portland OR
    center: [45.51179, -122.67563],
  // US
    // center: [39.977825662466266, -98.934902125],
    // center: [45.51179, -100.67563],
    zoom: 5,
    maxZoom: 7
    // layers: [streetmap, counties]
  });


d3.json(counties, function(data) {
console.log(counties)

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  // Grey background
  // id: "mapbox.grey",
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);


  // Creating a geoJSON layer with the retrieved data
  L.geoJson(data, {

    // Style each feature (in this case a neighborhood)
    style: function(feature) {
      return {
        color: "white",
        fillColor: '#74B6E6',
        fillOpacity: 0.5,
        weight: 1.5
      };
    },
    
  }).addTo(myMap);

});
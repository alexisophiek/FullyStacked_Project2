var counties = '/data/counties.json'

var myMap = L.map("map", {
    center: [45.51179, -122.67563],
    // center: [45.51179, -100.67563],
    zoom: 5

    // layers: [streetmap, counties]
  });
// Grabbing our GeoJSON data..
d3.json(counties, function(data) {


// var counties = '/data/counties.json'

// var myMap = L.map("map", {
//     center: [45.51179, -122.67563],
//     // center: [45.51179, -100.67563],
//     zoom: 5

//     // layers: [streetmap, counties]
//   });

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

  // Creating a geoJSON layer with the retrieved data
  L.geoJson(data, {
    // Style each feature (in this case a neighborhood)
    style: function(feature) {
      return {
        color: "white",
        // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
        // fillColor: chooseColor(feature.properties.borough),
        fillColor: '#74B6E6',
        fillOpacity: 0.5,
        weight: 1.5
      };
    },
    // Called on each feature
    
  }).addTo(myMap);
});


// var counties = '/data/counties.json'

// d3.json(counties, function(data) {


// var myMap = L.map("map", {
//     center: [45.51179, -122.67563],
//     // center: [45.51179, -100.67563],
//     zoom: 5

//     // layers: [streetmap, counties]
//   });

// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// }).addTo(myMap);

// // d3.json(counties, function(data) {

//   // Creating a geoJSON layer with the retrieved data
//   L.geoJson(data, {
//     // Style each feature (in this case a neighborhood)
//     style: function(feature) {
//       return {
//         color: "white",
//         // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
//         // fillColor: chooseColor(feature.properties.borough),
//         fillColor: '#74B6E6',
//         fillOpacity: 0.5,
//         weight: 1.5
//       };
//     },
//     // Called on each feature
    
//   }).addTo(myMap);
// });

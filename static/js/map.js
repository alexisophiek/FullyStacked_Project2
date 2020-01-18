
var counties = '/data/counties.json'

var myMap = L.map("map", {
    center: [45.51179, -122.67563],
    // center: [45.51179, -100.67563],
    zoom: 5

    // layers: [streetmap, counties]
  });

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// d3.json(counties, function(data) {
//   // Once we get a response, send the data.features object to the createFeatures function
//   // createFeatures(data.features);
//   var counties_pol = L.geoJSON(counties, {
//     onEachFeature: onEachFeature
//   });
//   createMap(counties_pol);
// });


// d3.json(counties, function(data) {

//   var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.streets",
//     accessToken: API_KEY
//   });

//   var myMap = L.map("map", {
//     center: [
//       37.09, -95.71
//     ],
//     zoom: 5,
//     layers: [streetmap, counties]
//   });

// }).addTo(myMap);

// function createMap(counties) {

  // Define streetmap and darkmap layers
 


// function createFeatures(counties) {

//   // Define a function we want to run once for each feature in the features array
//   // Give each feature a popup describing the place and time of the earthquake
//   function onEachFeature(feature, layer) {
//     layer.bindPopup("<h3>" + feature.properties.place +
//       "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
//   }

//   // Create a GeoJSON layer containing the features array on the earthquakeData object
//   // Run the onEachFeature function once for each piece of data in the array
//   var counties_pol = L.geoJSON(counties, {
//     onEachFeature: onEachFeature
//   });

//   // Sending our earthquakes layer to the createMap function
//   createMap(counties_pol);
// }



// ~~~~~~~~~~

// function createMap(counties) {

//   // Define streetmap and darkmap layers
//   var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.streets",
//     accessToken: API_KEY
//   });

//   var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.dark",
//     accessToken: API_KEY
//   });

//   // Define a baseMaps object to hold our base layers
//   var baseMaps = {
//     "Street Map": streetmap
//   };

//   // Create overlay object to hold our overlay layer
//   var overlayMaps = {
//     Counties: counties
//   };

//   // Create our map, giving it the streetmap and earthquakes layers to display on load
//   var myMap = L.map("map", {
//     center: [
//       37.09, -95.71
//     ],
//     zoom: 5,
//     layers: [streetmap, counties]
//   });

// }

// // // Creating map object
// // var map = L.map("map", {
// //   center: [40.7128, -74.0059],
// //   zoom: 17
// // });

// // // Adding tile layer
// // // L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
// // //   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
// // //   maxZoom: 18,
// // //   id: "mapbox.streets",
// // //   accessToken: API_KEY
// // // }).addTo(map);

// // // Where is the counties data? 

// // var counties = '/static/data/counties.json'


// // // Grabbing our GeoJSON data..
// // d3.json(counties, function(data) {

// //   L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
// //   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
// //   maxZoom: 18,
// //   id: "mapbox.streets",
// //   accessToken: API_KEY
// // }).addTo(map);
// //   // Creating a geoJSON layer with the retrieved data
// //   L.geoJson(data, {
// //     // Style each feature (in this case a neighborhood)
// //     style: function(feature) {
// //       return {
// //         color: "white",
// //         // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
// //         // fillColor: chooseColor(feature.properties.borough),
// //         fillColor: '#74B6E6',
// //         fillOpacity: 0.5,
// //         weight: 1.5
// //       };
// //     },
// //     // Called on each feature
// //     onEachFeature: function(feature, layer) {
// //       // Set mouse events to change map styling
// //       layer.on({
// //         // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
// //         mouseover: function(event) {
// //           layer = event.target;
// //           layer.setStyle({
// //             fillOpacity: 0.9
// //           });
// //         },
// //         // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
// //         mouseout: function(event) {
// //           layer = event.target;
// //           layer.setStyle({
// //             fillOpacity: 0.5
// //           });
// //         },
// //         // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
// //         click: function(event) {
// //           map.fitBounds(event.target.getBounds());
// //         }
// //       });
// //       // Giving each feature a pop-up with information pertinent to it
// //       layer.bindPopup("<h1>" + feature.properties.neighborhood + "</h1> <hr> <h2>" + feature.properties.borough + "</h2>");

// //     }
// //   }).addTo(map);
// // });

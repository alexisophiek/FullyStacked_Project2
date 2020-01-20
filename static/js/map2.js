
/*

 THIS IS A COPY FROM PREVIOUS TRIES
*/
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

var data = $.ajax({
    // type: "POST",
    url: 'map_geoJSON',
    dataType: 'json',
    success: function (response) {
    	for (i = 0; i < response.length; i++) {
    		geojsonLayer = response['features'][i]
    		console.log(geojsonLayer)
    		L.geoJson(geojsonLayer).addTo(myMap);
    	}
        // geojsonLayer = L.geoJson(response).addTo(myMap);
        // map.fitBounds(geojsonLayer.getBounds());
    }
});


//   var counties = L.geoJson(data, {

//     // Style each feature (in this case a neighborhood)
//     style: function(geo) {
//       return {
//         color: "white",
//         fillColor: '#74B6E6',
//         fillOpacity: 0.5,
//         weight: 1.5
//       };
//     }
    
//   }).addTo(myMap);



  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap)

  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  }).addTo(myMap)

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  }

  // Create overlay object to hold our overlay layer
  // var overlayMaps = {
  //   Counties: counties
  // };

  // Create our map, giving it the streetmap and earthquakes layers to display on load

  // var controls = L.control.layers(baseMaps, overlayMaps, {
  //   collapsed: false
  // }).addTo(myMap);
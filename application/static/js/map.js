var health = 'HEALTH.csv'
var scores = []
var data
// var endpoint = "/counties_data"

counties_endpoint(endpoint, myMap)

// L.control.layers(overlayMaps).addTo(map);

// var 

function counties_endpoint(endpoint, myMap){

   // var counties = L.layerGroup();

      d3.json("/counties_data", function(data) {
        console.log(data.length())
        // var counties = L.tileLayer(endpoint, {
        //   attribution: 'idk',
        //   maxZoom: 9,
        //   minZoom: 5,
        //   id: 'mapbox.dark'
        // }).addTo(myMap)

            var counties = L.geoJson(data, {
            // L.geoJson(data, {

                // Style each feature (in this case a neighborhood)
                          style: function(feature) {
                            return {
                              color: "white",
                              fillColor: '#74B6E6',
                              // fillOpacity: 0.5,
                              weight: 1.5
                            };
                          },
                
            }).addTo(myMap)

            // L.control.layers(overlayMaps).addTo(myMap);
                // layers: [streetmap, counties]

        // createFeatures(data)

            var county_layer = L.geoJSON(data, {
                onEachFeature: onEachFeature
            });
        // createMap(county_layer, streetmap, darkmap, counties, myMap);

            var overlayMaps = {
                Counties: counties
              }

          return overlayMaps
      });
      // L.control.layers(county_layer).addTo(myMap);
}

// THIS MARKS THE END OF THE FUNCTION CALLED counties_endpoint()
// THIS MARKS THE END OF THE FUNCTION CALLED counties_endpoint()
// THIS MARKS THE END OF THE FUNCTION CALLED counties_endpoint()


function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place + "</h3>")
  }

// function createFeatures(data) {

//   var county_layer = L.geoJSON(data, {
//     onEachFeature: onEachFeature
//   });
//   return county_layer

//   // createMap(county_layer, streetmap, darkmap);
// }

L.control.layers(overlayMaps).addTo(map);
console.log('done')


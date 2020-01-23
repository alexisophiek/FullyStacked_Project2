// counties_endpoint(endpoint, myMap)
function styles(feature) {
  if (feature.properties['STATE'] == '01') {
            return {
                fillColor: "#FCB81E",
                weight: 2,
                opacity: 1,
                // color: 'red',
                // color: "#CCCCCC",
                fillOpacity: 0.5
              };
   }
   else {
    return {
                fillColor: 'blue',
                weight: 2,
                opacity: 1,
                // color: 'red',
                // color: "#CCCCCC",
                fillOpacity: 0.5
      }
   }
};
function counties_endpoint(){
  var endpoint = "/counties_data"


// START D3.JSON
      d3.json(endpoint, function(data) {

        var counties = data;

        L.geoJson(counties, {
            style: styles
          })
        .addTo(myMap) 
       })

}
counties_endpoint()
console.log('end')
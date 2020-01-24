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

    var counties = data      

        L.geoJson(counties, {
            style: styles,
            onEachFeature: onEachFeature
          })
        .addTo(myMap) 

       })
    }


function onEachFeature(feature, layer) {
            var popupContent = "<div>County: " + feature.properties.NAME+
            "</br>Obesity Rate: " + feature.properties.PCT_OBESE_ADULTS13+
            "National Avg Obesity Rate: " + feature.properties.natavgobese +
            "</br>Diabetes Rate: "+feature.properties.PCT_DIABETES_ADULTS13+
            "National Avg Diabetes Rate: " + feature.properties.natavgdiab +
            "</br>Overall Low Access to Store: " +feature.properties.PCT_LACCESS_POP15+
            "</br>SNAP Participants with Low Access to Store: " +feature.properties.PCT_LACCESS_SNAP15+
            "</br>Median Household Income: " +feature.properties.MEDHHINC15+
            "National Avg Household Income " + feature.properties.natavgincome 
            "</div";
            layer.bindPopup(popupContent)
}

// function onEachFeature(feature, layer) {
//             var popupContent = "<div>County: " + feature.properties.NAME+
//             "</br>Obesity Rate: " + feature.properties.PCT_OBESE_ADULTS13+
//             "National Avg Obesity Rate: " + natavgobese +
//             "</br>Diabetes Rate: "+feature.properties.PCT_DIABETES_ADULTS13+
//             "National Avg Diabetes Rate: " + natavgdiab +
//             "</br>Overall Low Access to Store: " +feature.properties.PCT_LACCESS_POP15+
//             "</br>SNAP Participants with Low Access to Store: " +feature.properties.PCT_LACCESS_SNAP15+
//             "</br>Median Household Income: " +feature.properties.MEDHHINC15+
//             "National Avg Household Income " + natavgincome 
//             "</div";
// }
counties_endpoint()
console.log('end')


// function onEachFeature(feature, layer) {
//             var popupContent = "<div>County: " + feature.properties.NAME+
//             "</br>Obesity Rate: " + feature.properties.PCT_OBESE_ADULTS13+
//             "National Avg Obesity Rate: " + natavgobese +
//             "</br>Diabetes Rate: "+feature.properties.PCT_DIABETES_ADULTS13+
//             "National Avg Diabetes Rate: " + natavgdiab +
//             "</br>Overall Low Access to Store: " +feature.properties.PCT_LACCESS_POP15+
//             "</br>SNAP Participants with Low Access to Store: " +feature.properties.PCT_LACCESS_SNAP15+
//             "</br>Median Household Income: " +feature.properties.MEDHHINC15+
//             "National Avg Household Income " + natavgincome 
//             "</div";
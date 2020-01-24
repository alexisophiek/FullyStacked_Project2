// counties_endpoint(endpoint, myMap)
function styles(feature) {
  var prop = feature.properties
  var val = prop.PCT_OBESE_ADULTS13

  val = parseInt(val)
  console.log(val)
  console.log(prop)

  return {
      fillColor: getColor(val),
      fillOpacity: 0.5,
      weight: 2,
      opacity: 1,
      color: '#ffffff',
      dashArray: '3'
    };
  }

function getColor(value){
  var h = (1.0 - value) * 240
  return "hsl(" + h + ", 100%, 50%)";
}

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

counties_endpoint()
console.log('end')


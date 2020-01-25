// counties_endpoint(endpoint, myMap)
function styles(feature) {
  var prop = feature.properties
  var val = prop.PCT_OBESE_ADULTS13
  val = parseInt(val)

  return {
    fillColor: getColor(val),
    fillOpacity: 0.5,
    weight: 2,
    opacity: 1,
    color: '#ffffff',
    dashArray: '3'
  };
}
function getColor(d) {
  return d > 35 ? '#FF2200' :
    d > 30 ? '#E55640' :
      d > 25 ? '#F58574' :
        d > 20 ? '#FF7864' :
          d > 15 ? '#FF8E7C' :
            d > 10 ? '#FFA89B' :
              d > 5? '#F3B7AE' :
                d > 3 ? '##FFDAB9' :
                  d > 1 ? '##FFEFD5' :
                    '#109C00';
}
function counties_endpoint() {
  // START D3.JSO
  d3.json("/counties_data", function (data) {
    var counties = L.geoJson(data, {
      style: styles,
      onEachFeature: onEachFeature
    })
      .addTo(myMap)
  })
}
counties_endpoint()
function onEachFeature(feature, layer) {
  var popupContent = "<div>County: " + feature.properties.NAME +
    "</br>Obesity Rate: " + feature.properties.PCT_OBESE_ADULTS13 +
    "</br>Diabetes Rate: " + feature.properties.PCT_DIABETES_ADULTS13 +
    "</br>Overall Low Access to Store: " + feature.properties.PCT_LACCESS_POP15 +
    "</br>SNAP Participants with Low Access to Store: " + feature.properties.PCT_LACCESS_SNAP15 +
    "</br>Median Household Income: " + feature.properties.MEDHHINC15 +
    "</div";
  layer.bindPopup(popupContent)
}
createMap(myMap)



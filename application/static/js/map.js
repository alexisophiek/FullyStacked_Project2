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
  return d > 35 ? '#D30004' :
    d > 30 ? '#F73C3E' :
      d > 25 ? '#E45252' :
        d > 20 ? '#FAAC58' :
          d > 15 ? '#F5ECCE' :
            d > 10 ? '#9FF781' :
              d > 5? '#EBF6AD' :
                d > 3 ? '#D2ED79' :
                  d > 1 ? '#97D757' :
                    '#59B002';
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
    "</br>Obesity Rate: " + feature.properties.PCT_OBESE_ADULTS13 +"%"+
    "</br>Diabetes Rate: " + feature.properties.PCT_DIABETES_ADULTS13 +"%"+
    "</br>Overall Low Access to Store: " + feature.properties.PCT_LACCESS_POP15 +"%"+
    "</br>SNAP Participants with Low Access to Store: " + feature.properties.PCT_LACCESS_SNAP15 +"%"+
    "</br>Median Household Income: $" + feature.properties.MEDHHINC15 +
    "</div";
  layer.bindPopup(popupContent)
}
createMap(myMap)



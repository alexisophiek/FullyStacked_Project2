// Front Page Text Wrapper Animation
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  //Animation END

 //
 d3.json(counties, function(data) {
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
...
}).addTo(map);
});
//
  

  // Connect to DB and make sure we can query

//   var pg = require(‘pg’);
//   var connectionString ='postgresql://postgres:postgres@localhost:52866/USDA_Foods';
//   var pgClient = new pg.Client(connectionString);
//   var query = pgClient.query("QUERY");




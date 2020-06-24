/*
* Uddip Amin
* 991518202
*/

var planetArray = new Array();

$(document).ready(function() {
  $.getJSON("data/planets.json", function(data) {
    for (x = 0; x < data.solarSystem.planets.length; x++) {
      console.log("Plant: " + x);
      planetArray[x] = data.solarSystem.planets[x];
    }
  });
});

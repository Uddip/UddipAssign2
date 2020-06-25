/*
* Uddip Amin
* 991518202
*/

$(document).ready(function() {
  let planet = JSON.parse(localStorage["planet"]);

  $("#planet_name").html(planet.planetName);
  $("#planet_image").attr("src", `images/${planet.image}`);
  $("#planet_colour").append(planet.planetColor);
  $("#planet_radius").append(planet.planetRadiusKM + " km");
  $("#dist_sun").append(planet.distInMillionsKM.fromSun + " million km");
  $("#dist_earth").append(planet.distInMillionsKM.fromEarth + " million km");
});

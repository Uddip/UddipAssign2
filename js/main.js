/*
* Uddip Amin
* 991518202
*/

$(document).ready(function() {
  $.getJSON("data/planets.json", function(data) {
    let planetArray = data.solarSystem.planets;
    $("main").append("<table></table>");

    planetArray.forEach((planet, index) => {
      $("table").append(`<li>
                        <div class="card planetCard" style="width: 18rem; border-radius: 25px; border: 1px solid black">
                        <a
                          href="uddip.html"
                          data-index="${index}"
                          id="${planet.planetName}">
                          <img src="images/${planet.image}" class="card-img-top" >
                        </a>
                          <div class="card-body">
                            <h5 class="card-title planet_label">${planet.planetName}</h5>
                          </div>
                        </div>
                         </li>`
                        );
    });

    $("table a").click(function(){
      let index = $(this).data("index");
      localStorage["planet"] = JSON.stringify(planetArray[index]);
    });
  });

});

var width = 960,
    height = 960;

var projection = d3.geo.mercator()
    .scale((width + 1) / 2 / Math.PI)
    .translate([width / 2, height / 2])
    .precision(.1);

var path = d3.geo.path()
    .projection(projection);

var graticule = d3.geo.graticule();

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);

d3.json("/data/world-50m.json", function(error, world) {
  if (error) throw error;

  svg.insert("path", ".graticule")
      .datum(topojson.feature(world, world.objects.land))
      .attr("class", "land")
      .attr("d", path);

  svg.insert("path", ".graticule")
      .datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
      .attr("class", "boundary")
      .attr("d", path);

  d3.json("/data/y77d-th95.geojson", function(error, meteorites){
    var coordinates = meteorites.features
      .filter(function(feature){
        return feature.geometry !== null;
      })
      .filter(function(feature){
        return feature.geometry.type === "Point";
      })
      .map(function(feature){
        return {
          date: moment(feature.properties.year),
          lat : feature.geometry.coordinates[0],
          long: feature.geometry.coordinates[1]
        };
      })
      .sort(function(coordA, coordB){
        return coordA.date.year() - coordB.date.year();
      });

    setInterval(showMeteorites, 750);
    var minYear = coordinates[103].date.year();
    var maxYear = coordinates[coordinates.length-1].date.year();
    var curYear = minYear;
    var coordsThisYear = [];

    function showMeteorites(){
      coordsThisYear = coordinates.filter(function(coord){ return coord.date.year() === curYear;  });

      svg.selectAll(".star-container").remove();

      var fallingMeteorites = svg.selectAll(".star-container")
        .data(coordsThisYear);

      fallingMeteorites.enter()
        .append("g")
        .attr('class','star-container')
        .attr("transform", function(d) {
          return "translate(" + projection([d.lat,d.long]) + ")";
        })
        .append('path')
        .attr('fill', 'white')
        .attr('class', 'star')
        .attr('d','M12.584,5.888c-5.012,4.177-6.044,5.356-8.337,5.504 c-2.263,0.146-3.765-0.953-3.538-3.473c0.212-2.354,4.109-4.226,7.617-5.258c4.455-1.311,12.153-1.769,12.153-1.769 S16.498,2.627,12.584,5.888z');

      if(++curYear > maxYear){
        curYear = minYear; // reset
      }
    }


  });
});

d3.select(self.frameElement).style("height", height + "px");


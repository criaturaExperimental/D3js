var data = [4, 8, 15, 16, 23, 42];

// var body = d3.select("body");
// var div = body.append("div");
// div.html("Hello, world!");

// body
//     .style("color", "white")
//     .style("background-color", "black");

// scale to fit
var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 400]);

// chart and bars

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("padding", ".5%")
    .style("margin", ".3%")
    .style("color", "white")
    .style("background-color", "blue")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });

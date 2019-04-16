// @TODO: YOUR CODE HERE!
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Step 2: Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
// =================================
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);
  
// Step 3:
// Import data from the donuts.csv file
// =================================
d3.csv("data.csv", function(error, stateData) {
  if (error) throw error;
  
  // Format the data
  stateData.forEach(function(data) {
    data.poverty = +data.poverty;
    data.age = +data.age;
    data.income = +data.income;
    data.healthcare = +data.healthcare;
    data.obesity = +data.obesity;
    data.smokes = +data.smokes;
  })

  // Create the axes and scale them
  var xLinearScale = d3.scaleLinear()
    .range([0, width]);
  var x_axis = d3.axisBottom(xScale);

  var yLinearScale = d3.scaleLinear()
    .range([height, 0]);
  var y_axis = d3.axisleft(yscale);

  xLinearScale.domain([8, d3.max(Data, function(data) {
    return data.poverty;
  })])
  yLinearScale.domain([0, d3.max(Data, function(data) {
    return data.healthcare;
  })])

  var tooltip = d3.tip(
    .attr("class", "tooltip")
    .offset([80, -60])
    .html(function(data) {
      return (data.abbr + "<br>" + "Poverty Rate: " + data.poverty);
    })
});

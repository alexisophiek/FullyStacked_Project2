
var svgWidth = 1000;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3
    .select(".chart")
    .append("svg")
    .attr("width", svgWidth*2)
    .attr("height", svgHeight*2);

// Append an SVG group
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top*3})`);

svg.append("text")
    .attr("x", (width/1.8))
    .attr("y", 0 + (margin.top))



// // Initial Params
var chosenXAxis = "FFRPTH14"
console.log(chosenXAxis)

// // function used for updating x-scale var upon click on axis label
function xScale(data, chosenXAxis) {
    // create scales
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(data, d => d[chosenXAxis]),
        d3.max(data, d => d[chosenXAxis])
        ])
        .range([5, width]);

    return xLinearScale;

}

// // function used for updating xAxis var upon click on axis label
function renderAxes(newXScale, xAxis) {
    var bottomAxis = d3.axisBottom(newXScale);

    xAxis.transition()
        .duration(1000)
        .call(bottomAxis);

    return xAxis;
}

// // function used for updating circles group with a transition to
// // new circles
function renderCircles(circlesGroup, newXScale, chosenXaxis) {

    circlesGroup.transition()
        .duration(1000)
        .attr("cx", d => newXScale(d[chosenXAxis]));

    return circlesGroup;
}
// function used for updating circles group with a transition to
// new circles
// // function used for updating circles group with new tooltip
function updateToolTip(chosenXAxis, circlesGroup) {

    if (chosenXAxis === "FFRPTH14") {
        var label = "Fast Food Restaurants Count";
    }
    else {
        var label = "Grocery stores Count"
;
    }

    var toolTip = d3.tip()
        .attr("class", "tooltip")
        .offset([80, -60])
        .html(function (d) {
            return (`${d.County}<br> ${d.State}`);
        });

    circlesGroup.call(toolTip);

    circlesGroup.on("mouseover", function (data) {
        toolTip.show(data);
    })
        // onmouseout event
        .on("mouseout", function (data, index) {
            toolTip.hide(data);
        });

    return circlesGroup;
}

// // Retrieve data from the CSV file and execute everything below
d3.csv("combined.csv").then(function (data, err) {
    if (err) throw err;
        if (data["State"] == [data.State = "OR"]) {
         return data
            }
        console.log(data)
      // parse data
    data.forEach(function (data) {
        data.FFRPTH14 = +data.FFRPTH14 
        data.PCT_OBESE_ADULTS13 = +data.PCT_OBESE_ADULTS13;
        data.GROCPTH14 = +data.GROCPTH14;
    });

    //   // xLinearScale function above csv import
    var xLinearScale = xScale(data, chosenXAxis);

    // Create y scale function
    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.PCT_OBESE_ADULTS13)])
        .range([height, 0]);

    // Create initial axis functions
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    //   // append x axis
    var xAxis = chartGroup.append("g")
        .classed("x-axis", true)
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);
        
    //   // append y axis
    chartGroup.append("g")
        .call(leftAxis)
        

    var color = d3.scaleOrdinal()
            .domain(["FFRPTH14", "GROCPTH14"])
            .range(["#c0ede3","#36072f"])
    
        // Add dots
    var circlesGroup = chartGroup.selectAll("circle")
            .data(data)
            .enter().append("circle")
            .attr("cx", d => xLinearScale(d[chosenXAxis]))
            .attr("cy", d => yLinearScale(d.PCT_OBESE_ADULTS13))
            .attr("r", 7)         // .attr("fill", "green")
            .attr("opacity", ".3")
            .style("fill", function (data) { return color(data.state == "OR") })
            .style("stroke", "black");


    //   // Create group for  2 x- axis labels
    var labelsGroup = chartGroup.append("g")
        .attr("transform", `translate(${width / 2}, ${height + 20})`);

    var FFRPTH14 = labelsGroup.append("text")
        .attr("x", 0)
        .attr("y", 20)
        .attr("value", "FFRPTH14") // value to grab for event listener
        .classed("active", true)
        .text("Fast Food Restaurants (1,000/pop)")

    var GROCPTH14 = labelsGroup.append("text")
        .attr("x", 0)
        .attr("y", 40)
        .attr("value", "GROCPTH14") // value to grab for event listener
        .classed("inactive", true)
        .text("Grocery stores (1,000/pop)")

    //   // append y axis

    chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .classed("axis-text", true)
        .text("Adult Obesity Rate");


    //   // updateToolTip function above csv import
    var circlesGroup = updateToolTip(chosenXAxis, circlesGroup);
    

    //   // x axis labels event listener
    labelsGroup.selectAll("text")
        .on("click", function () {
            // get value of selection
            var value = d3.select(this).attr("value");
            if (value !== chosenXAxis) {

                //         // replaces chosenXAxis with value
                chosenXAxis = value;
                // console.log(chosenXAxis)
                //         // functions here found above csv import
                // updates x scale for new data
                xLinearScale = xScale(data, chosenXAxis);
                //         // updates x axis with transition
                xAxis = renderAxes(xLinearScale, xAxis);
                //         // updates circles with new x values
                circlesGroup = renderCircles(circlesGroup, xLinearScale);
                //         // updates tooltips with new info
                circlesGroup = updateToolTip(chosenXAxis, circlesGroup);
                //         // changes classes to change bold text
 

                if (chosenXAxis === "FFRPTH14") {
                    FFRPTH14
                        .classed("active", true)
                        .classed("inactive", false);
                    GROCPTH14
                        .classed("active", false)
                        .classed("inactive", true);
                }
                else {
                    FFRPTH14
                        .classed("active", false)
                        .classed("inactive", true);
                    GROCPTH14
                        .classed("active", true)
                        .classed("inactive", false);
                }
            }
        })
}).catch(function (error) {
    console.log(error)
})

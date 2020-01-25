
var svgWidth =600;
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
    .attr("width", svgWidth * 2)
    .attr("height", svgHeight * 2);

// Append an SVG group
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top * 3})`);

// svg.append("text")
//     .attr("x", (width / 1.8))
//     .attr("y", 0 + (margin.top))

chartGroup.append("text")
    .attr("x", (width/2))             
    .attr("y", (10 - margin.top))
    .text("Oregon Counties: Obesity and Food Availability")
    .classed("title-text", true)
    .attr("text-anchor", "middle")  
    // .style("text-decoration", "underline")  

// // Initial Params
var chosenXAxis = "FFRPTH14"
var chosenXAxis = "GROCPTH14"
console.log(chosenXAxis)

// // function used for updating x-scale var upon click on axis label
function xScale(data, chosenXAxis) {
    // create scales
    var xLinearScale = d3.scaleLinear()
        .domain([-.05 + d3.min (data, d => d[chosenXAxis]),
        d3.max(data, d => d[chosenXAxis])
        ])
        .range([1, width]);

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
        var label = "# Fast Food Restaurants";
    }
    else if (chosenXAxis === "GROCPTH14") {
        var label = "# Grocery Stores"
    }
    else {
        var label = "# Convenience Stores"
    }
    var formatDecimal = d3.format(".1f")

    var toolTip = d3.tip()
        .attr("class", "tooltip")
        .offset([80, -60])
        .html(function (d) {
            return (`${d.County}, ${d.State} <br> Obesity Rate: ${d.PCT_OBESE_ADULTS13}%`);
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
d3.csv("combined.csv").then(function (data){
    if (data["State"] == [data.State = "OR"]) {
        return data.State == "OR"
    }
    console.log(data)
    // parse data
    data.forEach(function (data) {
        data.FFRPTH14 = +data.FFRPTH14
        data.PCT_OBESE_ADULTS13 = +data.PCT_OBESE_ADULTS13;
        data.GROCPTH14 = +data.GROCPTH14;
        data.CONVSPTH14 = +data.CONVSPTH14
        data.close = +data.close
        data.PCT_DIABETES_ADULTS13 =+ data.PCT_DIABETES_ADULTS13 ;
    });

    //   // xLinearScale function above csv import
    var xLinearScale = xScale(data, chosenXAxis);

    // Create y scale function
    var yLinearScale = d3.scaleLinear()
        .domain([-1, d3.max(data, d => d.PCT_OBESE_ADULTS13)+5])
        .range([height, 1]);

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
        .range(["#ffffff", "#8B0000"])

        
    // Add dots
    var circlesGroup = chartGroup.selectAll("circle")
        .data(data)
        .enter().append("circle")
        .style("fill", function (data) { return color(data.state == "OR") })
        .attr("cx", d => xLinearScale(d[chosenXAxis]))
        .attr("cy", d => yLinearScale(d.PCT_OBESE_ADULTS13))
        .attr("r", 5)         // .attr("fill", "green")
        .attr("opacity", ".7")
        // .style("fill", function (data) { return color(data.state == "OR") })
        .style("stroke", "black");

    //   // Create group for  2 x- axis labels
    var labelsGroup = chartGroup.append("g")
        .attr("transform", `translate(${width / 2}, ${height + 20})`);

    var FFRPTH14 = labelsGroup.append("text")
        .attr("x", 0)
        .attr("y", 30)
        .attr("value", "FFRPTH14") // value to grab for event listener
        .classed("active", true)
        .text("Fast Food Restaurants(per 1,000)")

    var GROCPTH14 = labelsGroup.append("text")
        .attr("x", 0)
        .attr("y", 90)
        .attr("value", "GROCPTH14") // value to grab for event listener
        .classed("inactive", true)
        .text("Grocery Stores(per 1,000)")

    var CONVSPTH14 = labelsGroup.append("text")
        .attr("x", 0)
        .attr("y", 60)
        .attr("value", "CONVSPTH14") // value to grab for event listener
        .classed("inactive", true)
        .text("Convenience Stores(per 1,000)")

    //   // append y axis

    chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 30 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .classed("axis-text", true)
        .text("Adult Obesity Rate (%)");

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

                    CONVSPTH14
                        .classed("active", false)
                        .classed("inactive", true);
                }
                else if (chosenXAxis === "GROCPTH14") {
                    FFRPTH14
                        .classed("active", false)
                        .classed("inactive", true);
                    
                    CONVSPTH14
                        .classed("active", false)
                        .classed("inactive", true);
                    
                    GROCPTH14
                        .classed("active", true)
                        .classed("inactive", false);

                    
                } else {
                    GROCPTH14
                        .classed("active", false)
                        .classed("inactive", true);
                    CONVSPTH14
                        .classed("active", true)
                        .classed("inactive", false);

                    FFRPTH14
                        .classed("active", false)
                        .classed("inactive", true);


                }
            }
        }
    )}
).catch(function (error) {
            console.log(error)
        })




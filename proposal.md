# Proposal for Food Environment Atlas Analysis
By Team Fully Stacked

## DataSet
Enormous CSV download from USDA
https://www.ers.usda.gov/data-products/food-environment-atlas/data-access-and-documentation-downloads/#Current%20Version

Counties GEOJson File:
https://eric.clst.org/tech/usgeojson/

## Github Repository
https://github.com/alexisophiek/FullyStacked_Project2


##  Questions
What Counties have a higher risk of adverse Health Outcomes?
What is the Socio-Economic Breakdown of that County?
Does Proximity to Food resources affect these two variables (health outcomes, assistance) in this County?  What about the whole State? The Whole Country? (These could be dropdown options)

## Inspiration
USDA’s Map visualization on this Data is helpful as we develop our initial insights.  It helped us discover the questions we wanted to answer and how we might improve on the data.
https://www.ers.usda.gov/data-products/food-environment-atlas/go-to-the-atlas/

## Potential Visualizations
Primary - Oregon Heat Map by County based on Health Risks (Obesity/Diabetes/et al)
County Hover - Detach, Zoom, Input Proximity Info into County Shape - AK to Research

Trend Analysis: As access increases, health increases
Bubble Chart - Percentage Change of Impactful Findings

Variables of Interest:
Grocery Stores and Grocery Stores accepting SNAP
Fast Food
Prove our Skepticism of Proximity to Local Farms as uninteresting/inconclusive to health
Farmers Markets

## The Stack
Upload CSV tabs as individuals tables to PostgresSQL and test query ability
Sketch Potential Visuals for End Analysis
Brainstorm Layout of Information and how to create Usability/Interaction
Link Database to Flask for initial queries to build visualizations
Build Front-End web pages, styling, usability

Compile Presentation

The Tools
PostgresSQL
SQL Alchemy
Flask
JS
HTML
CSS

##Deadlines
By Next Class, 1/13
PGadmin4 - Load it UP!

1/13 - Half R Day 
By End of Class - PGadmin4 and Flask Connected and Ready for Queries.  Flask and JS/HTML connected?

1/15 - Project Day
Initial Queries Cleaned and Map API (Leaflet or Plotly?) initialized.
Initial Static Files and Styling underway.


1/18 - Project Day
By End of Class - Initial Map with overlays.  Discuss further Visualizations and assign tasks. 
Hosting solution.

1/20 - Presidents Day
Meet?

1/22 - Project Day
Goals: Structures/Hosting/Database Complete. Final Tweaks on Visualizations. Compile Presentation in Google Slides? Or Other Presentation Tool to Embed in Web App.




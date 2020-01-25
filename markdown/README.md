# Welcome to our Environmental Food Analysis Project
____________________
#### If you are wanting to Visit our Web App, you can do so at:
http://teamfullystacked.herokuapp.com/

## Instructions
##### If you are wanting to run all our code and recreate this App, locally for testing or for fun (or because you are our Bootcamp TA's and Instructor), please follow the next set of instructions:


You will need to insert you mapbox API key into the config.js file.

Additionally, you will need to run export DATABASE_URL:"the_URL_string_here", in your local environment before running the database.py file.  The DATABASE_URL can be found in the config.py file.
Then you will need to create the database that makes all our analysis and visualsizations possible.
This can be done by running our database.py file to create and load our combined CSV into the postgresql database.

We had some issues with encoding with mac vs windows, if you run into this error, try removing/commenting out the encoding argument on line 30 in datamunging.py.

After that, you should be able to run python app.py from your terminal.  The Flask App launches with 0.0.0.0:5000, however, one of us incurred issues with this launch and had to replace this with 127.0.0.1:5000 to launch the page.


## Our Experience and Process

We tried to approach our questions as if we were part of an organization that could make suggestions to new progams, start-ups, or funding to increase access or raise funds for new ideas based on which regions showed adverse health outcomes and what we could determine were the root cause of those outcomes.  This idea would require a lot of analysis and problem some other cross-displinary data.

#### Initale Munging -
* Import Pandas and read in all 11 CSV's. Import CSVs and merge on the unique identifier 'FIPS' that matches each county. Merge all CSVs into a main CSV and delete duplicate columns. Using Pandas Data Frames.
Name and export CSV file to read into database.
* Create a DataBase in PostGresSQL, named "USDA_FOODS" for future data load.
* Create an engine to connect to Postgres when ready.
* Create a Python App, 'database.py' and import sqlalchemy to create an engine to PostgresSql.
* Build the schema of the database. Create a table,"Main" and identify KEY INDICATOR, and define column names and types (INT, STRING).
* Use Pandas to read in csv, create an os path and use pandas to deploy the schema and 'combined.csv' to database.
This process gives a better understanding and insight into how Python, SQLAclhemy, PostGres, Pandas, etc. all worked together.
For future, would go back and clean up the columns and be more thoughtful of how it will be used in the frontend.

#### Front End - 
The initial .html files were created with the elements for js and nav and footer structures.  As the project moved on, styling was applied to these elements to create a cohesive look. The dependencies, the navbar, the footer and scripts were moved into separate html files in order to keep our html file themselves very clean.
Our project took on a lot of importing from file to file in a Python Package/Flask App Factory.

The JSON file was merged with all the data from our database and sent to an endpoint ('/counties_data").  We experienced these encoding issues at the endpoint which disallowed us to work on the map more fully.

In the future, we would like to address our slow loading map, and deep dive a littler further into our visualizations to identify the forces behind these changing numbers.  We spent so much time on the database and the application itself that it took away from the data in just a two week timeframe.

Had minor style hang ups like figuring out how to get our full-size map to show below out transparent navigation bar.

Our JS Library is called Thanos.JS: it reduces your project size by randomly deleting half your file.  But really, there were many things we could have done, and we simply ran out of time.

#### GEOJson Hang Ups
GeoJSON seems to be one of the least widely accepted means for graphing data.  Data should be more widely referenced and provided as a resource for map, region, and geographical studies. It should be more widely available and accepted to better engage other profressions/disciplines. 
With that said, the complexity of the data and the task it places on the browser means that there might be other, more performance-based ways to create the representation.



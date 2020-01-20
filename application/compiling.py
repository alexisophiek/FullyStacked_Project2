import os
import json
from database import pguser, pw, engine




################################
# Load in the JSON File
counties = "static/data/counties.json"
geo = []
def county(file):
    with open(file, 'r') as f:
        data = json.load(f)
        geo.append(data)
        

county(counties)

myGeo = json.dumps(geo)

# print(geo)

################################
# Open a Query Session
 

# Read
result_set = engine.execute("SELECT county, PCT_DIABETES_ADULTS13 FROM main")  
for r in result_set:  
    print(r)














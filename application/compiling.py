import os
import json
from database import pguser, pw, engine




################################
# Load in the JSON File
file = "static/data/counties.json"
def county(file):
    with open(file, 'r') as f:
        data = json.load(f)
        return data

data = county(file)

################################
# Open a Query Session
 

# Read
# result_set = engine.execute("SELECT county, 'PCT_DIABETES_ADULTS13' FROM main")  
# for r in result_set:  
#     print(r)














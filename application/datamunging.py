import os
import json
import pprint
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy import func
from sqlalchemy import *
import sqlalchemy



################################
# Open a Query Session
def pgcall():
    engine = create_engine(f'postgresql://postgres:postgres@localhost:5432/USDA_Foods')
    # From PostgresSQL
    result_set = engine.execute("SELECT * FROM main")  
    # for r in result_set: 
    result = {}
    go = [dict(r) for r in result_set]
    for i in go:
        result[i['NAME']] = i
        # print(i)
    return result
pgcall()

################################
# Load in the JSON File
file = os.path.join('application','static','data','counties.json')

def county(file, pgjson):
    with open(file, 'r') as f:
        data = json.load(f)
    for each in data["features"]:
        # print(each)
        county = each['properties']['NAME']
        new_attr = pgjson.get(county)
        if new_attr:
            each['properties'].update(new_attr)
        else:
            print(county)
    # print(data)    
    return data

## Name pgcall and Call county funct
pgjson = pgcall()
county(file, pgjson)






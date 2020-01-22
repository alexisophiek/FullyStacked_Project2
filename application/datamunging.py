import os
import json
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy import func
from sqlalchemy import *
import sqlalchemy





################################
# Load in the JSON File
file = "/static/data/counties.json"
def county():
    with open(file, 'r') as f:
        data = json.load(f)
        return data

# data = county()

################################
# Open a Query Session
engine = create_engine(f'postgresql://postgres:Bl@st0ise18@localhost:5432/USDA_Foods')


# Read
result_set = engine.execute("SELECT * FROM main")  
for r in result_set:  
    print(r)














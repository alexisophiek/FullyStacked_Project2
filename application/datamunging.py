import os
import json
import pprint
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy import func
from sqlalchemy import *
import sqlalchemy





################################
# Load in the JSON File
file="data/counties.json"
def county():
    with open(file, 'r') as f:
        data = json.load(f)
        return data
    return data

# data = county()

################################
# Open a Query Session
'''
IF YOU ARE NOT SAM COOPER, ESQ -- PLEASE UNCOMMENT LINE 32 AND REMOVE LINE 31 FOR DUAL
DEFINITIONS OF engine = 

'''
engine = create_engine(f'postgresql://postgres:Bl@st0ise18@localhost:5432/USDA_Foods')
# engine = create_engine(f'postgresql://postgres:postgres@localhost:5432/USDA_Foods')


# Read
result_set = engine.execute("SELECT * FROM main")  
# for r in result_set: 
new = json.dumps([dict(r) for r in result_set]) 
# print(new)


















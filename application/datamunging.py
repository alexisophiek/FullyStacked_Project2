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
def county(file):
	# file = "/data/counties_data"
	with open(file, 'r', encoding = "ISO-8859-1") as f:
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
# engine = create_engine(f'postgresql://postgres:Bl@st0ise18@localhost:5432/USDA_Foods')
# engine = create_engine(f'postgresql://postgres:postgres@localhost:5432/USDA_Foods')

def food_data():

	engine = create_engine(f'postgresql://postgres:Bl@st0ise18@localhost:5432/USDA_Foods')

	result_set = engine.execute("SELECT * FROM main") 
	print(result_set)
	food = json.dumps([dict(r) for r in result_set]) 
	# print('food')
	return food



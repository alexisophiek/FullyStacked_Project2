import pandas as pd
import json
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy
import sqlalchemy
from sqlalchemy import create_engine, func
from flask import Flask, render_template, redirect
import requests
import psycopg2
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from getpass import getpass
from pprint import pprint
import os

import codecs

app = Flask(__name__)
# pguser = input('what is your Postgres username?')

"""
THIS FILE SHOULD ONLY RUN THE FLASK APP AND DECLARE ROUTES 
"""
# json = json.loads(open('/data/counties.json').read())
data = {}

def county():

	# response = json.loads(open('data/counties.json').read())
	# with open('data/counties.json', 'r') as file:
	# 	jsondata = json.load(file)

	with open('data/counties.json', 'r', encoding = "ISO-8859-1") as f:
		data = json.load(f)
		# data = jsonify(data)
		print(data)
	return data


# print(county())
county()
# print(county())
print(data)

# print(data.features)





@app.route("/")
# @app.route("/index")
def index():
	# print('line 32  route')
    # """List all available api routes."""
    # return render_template(['index.html','index2.html'], title='Home')
    return render_template('index.html', title='Home')

@app.route("/map")
def map():
    # """List all available api routes."""
    # return render_template('map.html', title='MapVisualization')
    return render_template('map.html')

@app.route("/presentation")
def presentation():
    # """List all available api routes."""
    return render_template('presentation.html', title='Presentation')


# @app.route("/data/counties.json")
# def loadgeojson():

# 	with open('/data/counties.json') as geo:
# 	# 	json.loads()
# 	# return dict
# 	# with open(geo) as geojson:
# 		counties = json.load(geo)
# 		print(counties)
# 	return counties

# @app.route('/data/counties.json')
# def bound():
# 	geo = '/data/counties.json'

# 	with open(geo) as geojson:
# 		d = json.loads(geojson)
# 		print(d)
# 	return jsonify(d)


# def showjson():
#     SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
#     json_url = os.path.join(SITE_ROOT, "static/data", "taiwan.json")
#     data = json.load(open(json_url))
#     return render_template('showjson.jade', data=data)

    # return '/data/counties.json'

if __name__ == '__main__':
	app.run(debug=True)
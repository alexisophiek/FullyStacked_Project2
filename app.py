import pandas as pd
import json
from flask_sqlalchemy import SQLAlchemy
import sqlalchemy
from sqlalchemy import create_engine, func
from flask import Flask, render_template, redirect
import requests
import psycopg2
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from getpass import getpass
import time

app = Flask(__name__)

print('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
print('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
print('p3/FullyStacked2 is running')
print('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
print('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
print('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
#################################################
# Flask Setup
#################################################
geo = []
data = {}

file = 'data/counties.json'


def county(file):
    '''
    What parameters? Later > file
    Returns -- 
    '''
    # response = json.loads(open('data/counties.json').read())
    # with open('data/counties.json', 'r') as file:
    #   jsondata = json.load(file)

    with open(file, 'r', encoding = "ISO-8859-1") as f:
        data = json.load(f)
        print(type(data))
        # for c in data:
            # geo.append(c)
        return data
    return data

# print(county())
county(file)
# print(county())



print(data)


@app.route("/")
# @app.route("/index")
def index():
	# print('line 32  route')
    # """List all available api routes."""
    # return render_template(['index.html','index2.html'], title='Home')
    return render_template('index.html', title='Home')

@app.route("/map")
def map():
    county(file)
    time.sleep(10)
    print(type(data))
    print('__________')
    print('__________')
    print('__________')
    print('__________')
    # """List all available api routes."""
    # return render_template('map.html', title='MapVisualization')
    return render_template('map.html', data=data)

@app.route("/map_geoJSON")
def mapGeoJSON():
    file = 'data/counties.json'
    county(file)
    time.sleep(10)

    # data = data[0]
    print(type(data))
    print('__________')
    print('__________')
    print('__________')
    print('__________')
    return data
    # return render_template(data=data)

@app.route("/presentation")
def presentation():
    # """List all available api routes."""
    return render_template('presentation.html', title='Presentation')

if __name__ == '__main__':
	app.run(debug=True)
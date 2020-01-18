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

app = Flask(__name__)


#################################################
# Flask Setup
#################################################
geo = []


def county():
    '''
    What parameters? Later > file
    Returns -- 
    '''
    # response = json.loads(open('data/counties.json').read())
    # with open('data/counties.json', 'r') as file:
    #   jsondata = json.load(file)

    with open('data/counties.json', 'r', encoding = "ISO-8859-1") as f:
        data = json.load(f)
        value = data['features']

        # jsondata = json.dumps(data)
        # jsondata = json.dumps(data)
        # print(data)
        for c in value:
            geo.append(c)
        return data


# print(county())
# county()
# print(county())


print(geo)


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

if __name__ == '__main__':
	app.run(debug=True)
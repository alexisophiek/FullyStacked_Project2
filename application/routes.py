from flask import Flask, render_template, redirect, make_response
from flask import request, render_template, make_response
from datetime import datetime as dt
from flask import current_app as app
import os
import json

################################
# Load in the JSON File
file = "static/data/counties.json"
def county(file):
    with open(file, 'r') as f:
        data = json.load(f)
        return data

data = county(file)


@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html', title='Home')

@app.route("/map")
def map():
    return render_template('map.html')

@app.route("/presentation")
def presentation():
    return render_template('presentation.html', title='Presentation')

@app.route("/counties_data")
def counties_data():
	print('endpoint HIT~~~~~~~')
	county(file)
	return jsonify(data)


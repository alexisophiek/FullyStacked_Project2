from flask import Flask, render_template, redirect, make_response
from flask import request, render_template, make_response
from datetime import datetime as dt
from flask import current_app as app
import application
from .datamunging import county

@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html', title='Home')

@app.route("/map")
def map():
    return render_template('map.html', title="Map")

@app.route("/presentation")
def presentation():
    return render_template('presentation.html', title='Presentation')

@app.route("/counties_data")
def counties_data():
	print('endpoint HIT~~~~~~~')
	county()
	return jsonify(data)


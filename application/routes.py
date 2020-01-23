from flask import Flask, render_template, redirect, make_response, jsonify
from flask import request, render_template, make_response
from flask import current_app as app
from .datamunging import county, food_data

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
	file = "application/static/data/counties.json"
	data = county(file)
	return jsonify(data)

@app.route("/usda")
def usda_food():
	food_data()
	return render_template('usda.html')

@app.route("/usda_data")
def usda():
	data = food_data()
	return data
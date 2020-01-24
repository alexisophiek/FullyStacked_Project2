from flask import Flask, render_template, redirect, make_response
from flask import request, render_template, make_response
from flask import current_app as app
from flask import jsonify
import flask
flask.__version__
import os
from .datamunging import pgcall, county
import unicodedata



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
	file = os.path.join('application','static','data','counties.json')
	pgjson = pgcall()
	# data = county(file, pgjson)
	data = county(file, pgjson)
	print(data)
	return jsonify(data)

	# def read_file(filename, charset='utf-8'):
	# with open(filename, 'r') as f:return f.read().decode(charset)



	# return jsonify(data)




@app.route("/pgcall")
def pg():
	print(pgcall())
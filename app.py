import pandas as pd
import json, os
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, redirect
import requests
import psycopg2
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from getpass import getpass
from compiling import geo

app = Flask(__name__)



#################################################
# Database Connection
#################################################

pguser = input('what is your Postgres username?')
pw = input('what is your postgres password?')
uri = f'postgresql://{pguser}:{pw}@localhost:5432/USDA_Foods'
print(uri)

app.config['SQLALCHEMY_DATABASE_URI']=uri

examples = main.query.all()

for each in examples:
    print(each.data)
#################################################
# Flask Setup
#################################################


@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html', title='Home')

@app.route("/map")
def map():
    geo
    return render_template('map.html')

@app.route("/presentation")
def presentation():
    return render_template('presentation.html', title='Presentation')

if __name__ == '__main__':
	app.run(debug=True)
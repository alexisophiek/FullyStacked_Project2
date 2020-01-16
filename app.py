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


app = Flask(__name__, static_url_path='', template_folder="templates")
pguser = input('what is your Postgres username?')

pw = getpass()
# pw = input('what is your postgres password?')
engine = create_engine(f'postgresql://{pguser}:{pw}@localhost:52866/USDA_Foods')
# engine = create_engine(f'postgresql://postgres:Bl@st0ise18@localhost:52866/USDA_Foods')
print('line 34')

#################################################
# Flask Setup
#################################################

@app.route("/")
@app.route('/index')
def index():
    # """List all available api routes."""
    return render_template('index.html', title='Home')
    return app.send_static_file("static/css/style.css")


if __name__ == '__main__':
	app.run(debug=True)
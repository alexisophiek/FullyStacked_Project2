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


app = Flask(__name__)
pguser = input('what is your Postgres username?')
pw = input('what is your postgres password?')
engine = create_engine(f'postgresql://{pguser}:{pw}@localhost:52866/USDA_Foods')
# engine = create_engine(f'postgresql://postgres:Bl@st0ise18@localhost:52866/USDA_Foods')


print('line 34')

#################################################
# Flask Setup
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (f"<h1> Welcome to Foods</h1>")

if __name__ == '__main__':
	app.run(debug=True)

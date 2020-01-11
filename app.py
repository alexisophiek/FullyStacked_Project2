import pandas as pd
import json
from flask_sqlalchemy import SQLAlchemy

# from flask_sqlalchemy import SQLAlchemy

from flask import Flask, render_template, redirect
import requests
import psycopg2

# engine = create_engine("postgresql+pg8000://dbuser:kx%25jj5%2Fg@pghost10/appdb")
engine = create_engine("postgres://postgres:Bl@st0ise18@localhost:53703/USDA_Foods")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Passenger = Base.classes.passenger

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"<h1> Welcome to Foods</h1>"
    )



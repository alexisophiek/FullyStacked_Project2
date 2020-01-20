import os
import json



counties = "data/counties.json"


geo = []
def county(file):
    with open(file, 'r') as f:
        data = json.load(f)
        geo.append(data)
        

county(counties)
# print(geo)













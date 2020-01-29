# Yaru Luo
# softdev pd01
# K24 -- A RESTful Journey Skyward
# 2019-11-12

from flask import Flask, request, render_template
from urllib.request import urlopen
import json
app = Flask(__name__)

@app.route( "/")
def root():
    request = urlopen(
        'https://api.nasa.gov/planetary/apod?api_key=YZpRGglnNl1Ud54e7aCcFRuPvAMrtgG3NYcEw5UB'
        )
    response = request.read()
    data = json.loads( response)
    print( data)
    return render_template("index.html",
                           pic = data)

if __name__ == "__main__":
    app.debug = True
    app.run()

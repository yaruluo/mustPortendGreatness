# Yaru && EDoss
# SoftDev1 pd1
# K11: Ay Mon Go Git It From Yer Flask
# 2020-03-10

from flask import Flask, request, render_template
app = Flask(__name__)

@app.route( '/')
def hello_world():
    return render_template( 'template.html')

if __name__ == "__main__":
    app.debug = True # this automatically reloads any changes
    app.run() # this runs the website 


# Yaru Luo & Tiffany Cao
# SoftDev1 pd1
# 
# 2019-09-25

from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def hello_world():
    print( "hello")
    return "hello world"

@app.route("/forms")
def test_tmplt():
    print(app)
    return render_template('tiffany.html'
    )

@app.route("/auth")
def authenticate():
    print( app)
    print( request)
    print( request.args)
    return "waa"

if __name__ == "__main__":
    app.debug = True
    app.run()


# Team Bread Getters: Yaru Luo & Hongwei Chen
# SoftDev1 pd1
# K#15
# 2019-10-02 

from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/') # home pg: login
def hello_world():
    print( "hello")
    # for testing
    print( "\n\n\n")
    print( "***DIAG: this Flask obj ***")
    print( app)
    print( "***DIAG: request obj ***")
    print( request)
    print( "***DIAG: request.args ***")
    print( request.args)
    return render_template( 'welcome.html'
    ) 



dict = {
    "username": "davidmholmes",
    "password": "apcs"
    }

print( dict)



@app.route('/welcome') # if login successful
def login():
    if request.args
    return( "hello")


if __name__ == "__main__":
    app.debug = True
    app.run()

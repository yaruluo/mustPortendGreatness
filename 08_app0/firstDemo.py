from flask import Flask
app = Flask(__name__) # create instance of class Flask

@app.route("/") # assign following fxn to run when route requested
def hello_world():
    print(__name__+ "huewkjdwek") # where will this go?
                 # in the terminal when u run the python file
    return "No hablo queso!" # seen on the website

@app.route("/SR")
def help():
    return "Sally Ride" # shows on the website at http://127.0.0.1:5000/SR

@app.route("/KJ") 
def stuy():
    return "Katherine Johnson" # shows on the website at http://127.0.0.1:5000/KJ


if __name__ == "__main__":
    app.debug = True # this automatically reloads any changes
    app.run() # this runs the website 


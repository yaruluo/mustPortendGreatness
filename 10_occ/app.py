# Yaru Luo
# SoftDev1 pd1
# K#10: Jinja Tuning
# 2019-09-24

from flask import Flask, render_template
app = Flask(__name__) # create instance of class Flask

import csv, random

rows = []
with open('occupations.csv', 'r') as csvFile:
    csvreader = csv.reader(csvFile)
    for row in csvreader:
        rows.append(row)

dictionary = {}
for item in rows[1: len( rows) - 1]:
    key = item[0]
    value = float( item[1])
    dictionary[ key] = value


    
#returns a randomly selected occupation where the results
#are weighted by the percentage given
def randomOccupation():
    currentNo = 0 
    currentOcc = ""
    randomNo = random.randint( 0, 998) #total % is 99.8
    for item in dictionary:
        currentOcc = item
        #parse through the dictionary until you reach
        #the random number, then return the occ
        currentNo += dictionary.get( item) * 10  
        if currentNo >= randomNo:
            return currentOcc

        

@app.route("/") # assign following fxn to run when route requested
def hello_world():
    print(__name__+ "Norm")
    return "Werk werk werk werk werk"

@app.route("/occupyflaskst")
def init():
    print("csving")
    return render_template(
        'werk.html',
        coll = dictionary,
        output = randomOccupation()
        )
        


if __name__ == "__main__":
    app.debug = True 
    app.run()

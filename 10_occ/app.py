# Amanda Zheng and Yaru Luo (AI-YA)
# SoftDev1 pd1
# K#10: Jinja Tuning
# 2019-09-24

from flask import Flask, render_template
app = Flask(__name__) # create instance of class Flask
import csv, random

# creates list of occs and %s
rows = []
with open( 'occupations.csv', 'r') as csvFile:
    csvreader = csv.reader( csvFile)
    for row in csvreader:
        rows.append( row)
dictionary = {} 
for item in rows[ 1: len( rows) - 1]:
    key = item[ 0]
    value = float( item[ 1])
    dictionary[ key] = value

# creates list of occs & links
r = []
with open( 'link.csv', 'r') as cFile:
    csvread = csv.reader( cFile)
    for row in csvread:
        r.append( row)
encyclopedia={} 
for item in r[ 0: len( r)]:
    key = item[ 0]
    value = item[ 1]
    encyclopedia[ key] = value

#make into a dictionary
def rangePercent( l):
    di = list( l.keys())
    l[ di[ 1]] = float( l.get( di[ 1]))
    for k in range( 1, len( l.keys())):
        l[ di[ k]] = round( float( l.get( di[ k]) + l.get( di[ k-1])), 1)
    return l
dictionary = rangePercent(dictionary)

# uses binary search
def randomPick(l):
    rand = random.randint(1,1000)
    rand = rand/10.0
    di = list(l.keys())
    counta = 0
    countb = len(di)-1
    if rand > 99.8:
        return "unemployed"
    while l.get( di[ counta]) < rand and l.get( di[ countb]) > rand:
        counta += 1
        countb -= 1
    if  l.get( di[ countb]) == rand:
         return di[ countb]
    if l.get( di[ counta]) >= rand:
        return di[ counta]
    else:
        return di[ countb + 1]
    
coll = dictionary
col = encyclopedia

@app.route("/") # assign following fxn to run when route requested
def hello_world():
    print(__name__+ "Norm")
    return "Werk werk werk werk werk" #default localhost page

@app.route("/occupyflaskst")
def init():
    print("csving")
    return render_template(
        'work.html',
        coll = dictionary,   #for the tablified occupations list
        output = randomPick( coll), #for the lucky occupation
        col = encyclopedia
        )

if __name__ == "__main__":
    #autopilot
    app.debug = True
    app.run()

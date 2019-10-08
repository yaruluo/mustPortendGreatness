#Yaru Luo & Wilson my duck
#SoftDev pd1 
#K#17 -- No Trouble
#2019-10-07

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#==========================================================

# < < < INSERT YOUR POPULATE-THE-DB CODE HERE > > >
command = "CREATE TABLE courses ( code TEXT, mark INTEGER, id INTEGER);"
c.execute( command)

with open( "data/courses.csv", "r") as courseCSV:
    courseReader = csv.DictReader( courseCSV)
    for row in courseReader:
        command = ""
        command += "INSERT INTO courses VALUES ('"
        command += row[ 'code'] + "',"
        command += row[ 'mark'] + ","
        command += row[ 'id'] + ")"
        c.execute( command)


command = "CREATE TABLE students ( name TEXT, age INTEGER, id INTEGER);"
# test SQL stmt in sqlite3 shell, save as string
c.execute(command)    # run SQL statement

with open( "data/courses.csv", "r") as courseCSV:
    courseReader = csv.DictReader( courseCSV)
    for row in courseReader:
        command = ""
        command += "INSERT INTO students VALUES ('"
        command += row[ 'name'] + "',"
        command += row[ 'age'] + ","
        command += row[ 'id'] + ")"
        c.execute( command)

#==========================================================

db.commit() #save changes
db.close()  #close database



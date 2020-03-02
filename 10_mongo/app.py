# Team  __ : Yaru && Ivan
# SoftDev2 pd1
# K#10: Import/Export Bank
# 2020-02-29

# dataset: historical events in American history
# description: 
# link: http://www.vizgr.org/historical-events/search.php?format=json&begin_date=-3000000&end_date=20151231&lang=en
# Pro Tip: You can change begin_date and end_date in URL to get events in a specific interval. 


from bson.json_util import loads
from pymongo import MongoClient

client = MongoClient()
db = client.history

db.catalog.drop() 
catalog = db.catalog
with open( 'history.json', 'r') as file:
  content = file.readlines()
  for line in content:
    catalog.insert_one( loads( line))

def findEvent( date):
  '''On this date...'''
  results = catalog.find( { 'date': date})
  print( 'Results Found: {}'.format( results.count()))
  print()
  for x in results:
    print( x[ 'name'])

findEvent( '2012/12/31')
findEvent( '-279')

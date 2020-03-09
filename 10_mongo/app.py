# Team Yarn : Yaru && Ivan
# SoftDev2 pd1
# K#10: Import/Export Bank
# 2020-02-29

# dataset: historical events in American history 
# link: http://www.vizgr.org/historical-events/search.php?format=json&begin_date=-3000000&end_date=20151231&lang=en
# Pro Tip: You can change begin_date and end_date in URL to get events in a specific interval. 

from pymongo import MongoClient
from bson.json_util import loads
from json import JSONDecoder

dec = JSONDecoder( object_pairs_hook = lambda x: x)
j = dict( JSONDecoder( object_pairs_hook = lambda x: x).decode( open( 'history.json', 'r').read()))

client = MongoClient()
db = client.test
events = db.events
for event in map( lambda x: x[-1], j[ 'result']):
 	bson.json_util.loads( item)

def findEvent( date):
	'''All events on a date.'''
	results = events.find( {'date': date})
	print( 'date: {}'.format( date))
	print( 'results found: {}'.format( results.count()))
	for x in results:
		print( x[ 'name'])

findEvent( '2012/12/31')
findEvent( '-279')

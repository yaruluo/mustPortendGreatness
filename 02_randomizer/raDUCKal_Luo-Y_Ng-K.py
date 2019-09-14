# Yaru Luo
# SoftDev1 pd1
# K02 -- NO-body expects the Spanish Inquisition!
# 2019-09-11

KREWES = {
	'orpheus': [ 'Emily', 'Kevin', 'Vishwaa', 'Eric', 'ray', 'Jesse', 'Tiffany', 'Amanda', 'Junhee', 'Jackie ', 'Tyler', 'Emory', 'Ivan', 'Elizabeth', 'Pratham', 'Shaw', 'Eric', 'Yaru', 'Kelvin', 'Hong Wei', 'Michael', 'Kiran', 'Amanda', 'Joseph', 'Tanzim', 'David', 'Yevgeniy'],
	'rex': [ 'William', 'Joseph', 'Calvin', 'Ethan', 'Moody', 'Mo', 'Big Mo', 'Peihua', 'Saad', 'Benjamin', 'Justin', 'Alice', 'Hilary', 'Ayham', 'Michael', 'Matthew', 'Jionghao', 'Devin ', 'David', 'Jacob', 'Will', 'Hannah', 'Alex'],
	'endymion': [ 'Grace', 'Nahi', 'Derek', 'Jun Tao', 'Connor', 'Jason', 'Tammy', 'Albert', 'Kazi', 'Derek', 'Brandon', 'Kenneth', 'Lauren', 'Biraj', 'Jeff', 'Jackson', 'Taejoon', 'Kevin', 'Jude', 'Sophie', 'Henry', 'Coby', 'Manfred', 'Leia', 'Ahmed', 'Winston']
}

def randomStudent( givenList): # givenList is KREWES
	  import random
	  teamNo = random.randrange( 2)
	  if teamNo == 0:
	     print( random.choice( KREWES[ 'orpheus']) + " from Team Orpheus")
	  if teamNo == 1:
	     print( random.choice( KREWES[ 'rex']) + " from Team Rex")
	  if teamNo == 2:
	     print( random.choice( KREWES['endymion']) + " from Team Endymion")

randomStudent( KREWES)

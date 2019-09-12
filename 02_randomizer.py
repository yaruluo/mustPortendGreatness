# Team Ducking Awesome
# Emory & Yaru

KREWES = {
	'orpheus': [ 'Emily', 'Kevin', 'Vishwaa', 'Eric', 'ray', 'Jesse', 'Tiffany', 'Amanda', 'Junhee', 'Jackie ', 'Tyler', 'Emory', 'Ivan', 'Elizabeth', 'Pratham', 'Shaw', 'Eric', 'Yaru', 'Kelvin', 'Hong Wei', 'Michael', 'Kiran', 'Amanda', 'Joseph', 'Tanzim', 'David', 'Yevgeniy'],
	'rex': [ 'William', 'Joseph', 'Calvin', 'Ethan', 'Moody', 'Mo', 'Big Mo', 'Peihua', 'Saad', 'Benjamin', 'Justin', 'Alice', 'Hilary', 'Ayham', 'Michael', 'Matthew', 'Jionghao', 'Devin ', 'David', 'Jacob', 'Will', 'Hannah', 'Alex'],
	'endymion': [ 'Grace', 'Nahi', 'Derek', 'Jun Tao', 'Connor', 'Jason', 'Tammy', 'Albert', 'Kazi', 'Derek', 'Brandon', 'Kenneth', 'Lauren', 'Biraj', 'Jeff', 'Jackson', 'Taejoon', 'Kevin', 'Jude', 'Sophie', 'Henry', 'Coby', 'Manfred', 'Leia', 'Ahmed', 'Winston']
}

#PRECONDITION: team is one of the three team names: Orpheus, Rex or Endymion
def getName( team):
    if not( team in KREWES.keys()):
        return "The chosen team is not an option."
    return random.choice( KREWES[ team])


print( getName( "hdfsaj"))
print( getName( "orpheus"))
print( getName( "orpheus"))
print( getName( "rex"))
print( getName( "endymion"))

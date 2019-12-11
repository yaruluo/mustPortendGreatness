var fib = function( num){
    if( num > 2)
	return fib( num - 2) + fib( num - 1);
    else
	return 1;
};

var gcd = function( a, b){
    if( b == 0){
	return a;
    }
    return gcd( b, a % b);
};

var randomStudent = function(){
    
};

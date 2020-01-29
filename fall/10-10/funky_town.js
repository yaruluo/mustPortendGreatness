var fib = function( num){
    if( num > 2)
	return fib( num - 2) + fib( num - 1);
    else
	return 1;
};

var gcd = function( a, b){
//     if( a < b)
// 	counter = a;
//     if( b <= a)
// 	counter = b;
//     while( counter > 0)
// 	if( ( a % counter) == 0)
// 	    if( ( b % counter) == 0)
// 		print( counter);
              
//         counter -= 1;
//     return 1;
// };
    if( b == 0){
	return a;
    }
    return gcd( b, a % b);
};

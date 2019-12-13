//Team SubtleAsianCoders - yaru luo && josephSpelledMyNameWrongSoIDisownhimAsMyPartner
//SoftDev1 pd1
//K29 -- Sequential Progression III: Season of the Witch
//2019-12-12

// var theArray = document.getElementsByTagName( 'li');

// var changeHeading = function(){
//     var header = document.getElementById( 'h');
//     for( let counter = 0; counter<array.length; counter++){
// 	var arrItem = theArray[ i]
// 	console.log( arrItem)
// 	arrItem.addEventListener( 'mouseover', function)()
// 	header.innerHTML = __________
//     });
// };

var removeItem = function(){
    
    console.log( 'sionfasl')
    var listItem = document.getElementById( 'fiblist');
    item = document.createElement( 'li')
    item.addEventListener( 'click', function(){
	item.remove();
    });
};

var lis = document.getElementsByTagName( 'li');
for( var i=0; i<lis.length; i++){
    // lis[ i].addEventListener( 'mouseover', changeHeading);
    // lis[ i].addEventListener( 'mouseout',
    // 			      );
    lis[ i].addEventListener( 'click', removeItem);
}

var fib = function(n){
    if (n == 0) return 0;
    else if (n < 3) return 1;
    else return fib(n-1) + fib(n-2);
}

var index = 0;
var fibbutton = document.getElementById("fb");
fibbutton.addEventListener("click", () => addFib(index));
var fibarray = [0,1,1];

var addFib = function( input){
    console.log( input);
    document.getElementById( "fiblist").innerHTML += index + ". " + fib( input) + "<br>"
    index++;
}

var thebutton = document.getElementById("b");
thebutton.addEventListener( "click", () => addItem());

var addItem = function() {
    var list = document.getElementById( "thelist");
    console.log(list);
    var item = document.createElement( "li");
    item.innerHTML = "WORD";
    list.appendChild( item);
}

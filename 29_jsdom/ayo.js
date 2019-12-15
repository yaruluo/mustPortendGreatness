//Team SubtleAsianCoders - yaru luo && josephSpelledMyNameWrongSoIDisownhimAsMyPartner
//SoftDev1 pd1
//K29 -- Sequential Progression III: Season of the Witch
//2019-12-12

// var changeHeading = function( ){
//     console.log
//     var header = document.getElementById( 'h');
//     header.innerHTML = String( this.innerText);
// };

// var revertHeading = function(){
//     var header = document.getElementById( 'h');
//     header.innerHTML = 'Hello World!';
// };

// var removeItem = function( item){
//     if( typeof(item) == 'undefined'){
// 	console.log( item);
// 	item = document.getElementsByTagName( 'li')[ 0];
//     }
//     console.log( 'removed item')
//     item.remove();
// };

var lis = document.getElementsByTagName( 'li');
for( var i=0; i<lis.length; i++){
    console.log( lis[ i]);
    lis[ i].addEventListener( 'mouseover', function(){
	h.innerHTML = this.innerHTML;
    });
    lis[ i].addEventListener( 'mouseout', () => revertHeading());
    lis[ i].addEventListener( 'click', function(){
	console.log( 'removed item')
	this.remove()
    });
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
    item.addEventListener( 'click', () => removeItem( item));
}



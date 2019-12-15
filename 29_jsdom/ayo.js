//Team SubtleAsianCoders - yaru luo && josephSpelledMyNameWrongSoIDisownhimAsMyPartner
//SoftDev1 pd1
//K29 -- Sequential Progression III: Season of the Witch
//2019-12-12

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
var revertHeading = function(){
    var header = document.getElementById( 'h');
    header.innerHTML = 'Hello World!';
};

// WORD
var thebutton = document.getElementById("b");
thebutton.addEventListener( "click", () => addItem());
var addItem = function() {
    var list = document.getElementById( "thelist");
    console.log(list);
    var item = document.createElement( "li");
    item.innerHTML = "WORD";
    list.appendChild( item);
    item.addEventListener( 'click', function(){ this.remove()});
}

// fibonacci
var fib = function(num){
    if (num == 0) return 0;
    else if (num < 3) return 1;
    else return fib(num-1) + fib(num-2);
}
var index = 1;
var fibbutton = document.getElementById("fb");
fibbutton.addEventListener("click", () => addFib(index));
// var fibarray = [0,1,1];
var addFib = function( input){
    console.log( input + " fib #: " + fib( input));
    document.getElementById( "fiblist").innerHTML += index + ". " + fib( input) + "<br>"
    index++;
}

// factorial
var fact = function( num){
    if( num < 2){
	return 1 
    }
    return num * fact( num - 1)
}
var factIndex = 1;
var factbutton = document.getElementById( 'factB');
factbutton.addEventListener( 'click', () => addFact( factIndex));
var addFact = function( input){
    console.log( input + " fact #: " + fact( input));
    document.getElementById( 'factlist').innerHTML += factIndex + ". " + fact( input) + "<br>"
    factIndex++;
}

// triangular numbers: objects that can form an equilateral triangle
var tri = function( n){
    return( n * ( n+1) / 2);
};
var triIndex = 1;
var tributton = document.getElementById( 'tb');
tributton.addEventListener( 'click', () => addTri( triIndex));
var addTri = function( input){
    console.log( input + " triangular #: " + tri( input));
    document.getElementById( 'trilist').innerHTML += triIndex + ". " + tri( input) + "<br>"
    triIndex++;
}

// the lazy caterer's sequence: max number of pieces formed when slicing a pancake w n cuts
var slices = function( n){
    return( n * ( n+1)) / 2 + 1;
};
var pancakeIndex = 1;
var lcbbutton = document.getElementById( 'lcb');
lcbbutton.addEventListener( 'click', () => addPancakeSlices( pancakeIndex));
var addPancakeSlices = function( input){
    console.log( "cuts: " + input + ", # of slices: " + slices( input));
    document.getElementById( 'pancakelist').innerHTML += pancakeIndex + ". " + slices( input) + "<br>"
    pancakeIndex++;
}

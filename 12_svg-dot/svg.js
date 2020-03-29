// Team Club Penguinners
// Yaru && Tiff
// SoftDev1 pd1
// K#12: Connect the Dots
// 2020-03-30

var oldX = null;
var oldY = null;
var firstClick = true;

var pic = document.getElementById("vimage");
pic.addEventListener( "click", function( e){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
   
    c.setAttribute("r", "5");
    c.setAttribute("fill", "orange");
    c.setAttribute("stroke", "black");
    
    console.log( 'click');
    console.log( e.offsetX);
    console.log( e.offsetY);
    c.setAttribute( 'cx', e.offsetX);
    c.setAttribute( 'cy', e.offsetY);

    pic.appendChild(c);

    var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    if( firstClick){
	firstClick = false;
	console.log( firstClick);
    }
    else{
	l.setAttribute( 'x1', oldX);
	l.setAttribute( 'y1', oldY);
	l.setAttribute( 'x2', e.offsetX);
	l.setAttribute( 'y2', e.offsetY);
	l.setAttribute( 'stroke', 'black');
	pic.appendChild(l);
    }

    oldX = e.offsetX;
    oldY = e.offsetY;
    

});


// Event listener for clear button
document.getElementById('clear').addEventListener("click", function(e) {
    firstClick = true;
    console.log("clear");
    // e.preventDefault();
    
});

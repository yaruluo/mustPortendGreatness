// Team PYthon
// Yaru and Pratham
// SoftDev1 pd1
// K04 -- I See a Red Door...
// 2020-02-05

// retrieve node in DOM via ID
var c = document.getElementById( "slate");

// instantiate a CanvaRenderingContext2D object
var ctx = c.getContext( "2d");

var clear = document.getElementById( 'clear');
var toggle = document.getElementById( 'toggle');
var mode = 'box';

var drawn = false;

// clears screen
clear.addEventListener( 'click', function( e){
    // ctx.fillStyle = "#fff";
    // ctx.fillRect( 0, 0, c.width, c.height);
    if( !drawn){
	e.preventDefault();
    }
    else{
	ctx.fillStyle = "#fff";
	ctx.fillRect( 0, 0, c.width, c.height);
	drawn = false;
    }
});

// toggle bw a box and dot
toggle.addEventListener( 'click', function( e){
    if( mode == "box"){
	mode = "dot";
    }
    else{
	mode = "box";}
    }
    toggle.innerHTML = mode;
});

// draws the box or dot
c.addEventListener( 'click', function( e){
    // gets coords of mouse click
    var xcor = e.offsetX;
    var ycor = e.offsetY;
    if( mode=="box"){
	drawn = true;
	ctx.fillRect( xcor, ycor, 50, 50);
    }
    else{
	drawn = true;
	ctx.fillStyle="black";
	ctx.beginPath(); // begins or resets path
	ctx.ellipse( xcor, ycor, 5, 5, ( Math.PI / 4), 0, ( 2 * Math.PI));
	// omg i cannot math
	ctx.stroke();
	ctx.fill();
    }
});


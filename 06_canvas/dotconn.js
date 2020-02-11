// Team PYthon
// Yaru and Pratham
// SoftDev1 pd1
// K #06: Dot Dot Dot
// 2020-02-11


// Constants for Drawing
const CIRCLE_RADIUS = 5;

var c = document.getElementById('playground'); // Retrieves DOM objext for canvas
var ctx = c.getContext("2d"); // Creates context element objext for Canvas
var firstClick = true;
var oldX = null;
var oldY = null;

// Event listener for drawing on canvas
c.addEventListener("click", function(e) {
    console.log("clik");
    var rect = c.getBoundingClientRect();
    ctx.arc(e.clientX - rect.x, e.clientY - rect.y, CIRCLE_RADIUS, 0, Math.PI * 2);
    ctx.closePath();

    ctx.fill(); // dot

    if(firstClick) {
	firstClick = false;
    } else {
	ctx.beginPath();
	ctx.moveTo(e.clientX - rect.x, e.clientY - rect.y);  // last specified point
	ctx.lineTo(oldX, oldY); // creates new point line to the point from the last specified point
	ctx.stroke(); // actually draws path 
	ctx.closePath();
    }
    oldX = e.clientX - rect.x;
    oldY = e.clientY - rect.y;
});

// Event listener for clear button
document.getElementById('clear').addEventListener("click", function(e) {
    firstClick = true;
    console.log("clr");
    // e.preventDefault();
    ctx.clearRect(0, 0, c.height, c.width);
});

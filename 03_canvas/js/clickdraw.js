// retrieve node in DOM via ID
var c = document.getElementById("slate");
console.log(c);
console.log( 'hi');

// instantiate a CanvaRenderingContext2D object
var ctx = c.getContext( "2d");

// invoke interface methods
ctx.fillStyle = "#ff0000";
ctx.fillRect( 50, 50, 100, 200);

// const canvas = document.getElementById('my-house');
// const ctx = canvas.getContext('2d');

// // Set line width
// ctx.lineWidth = 10;

// // Wall
// ctx.strokeRect(75, 140, 150, 110);

// // Door
// ctx.fillRect(130, 190, 40, 60);

// // Roof
// ctx.moveTo(50, 140);
// ctx.lineTo(150, 60);
// ctx.lineTo(250, 140);
// ctx.closePath();
// ctx.stroke();

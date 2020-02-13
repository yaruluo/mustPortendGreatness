// Greyducks  -- Tiffany Cao & Yaru Luo
// SoftDev1 pd1
// K08 -
// 2020-02-13

var c = document.getElementById( "slate");
var ctx = c.getContext( "2d");
// sets things for an Animaniac
var animID = 0;
var progress = 0;
var shrink = false;
// sets things for the movie to start
var logo = new Image();
logo.src='img/logo.png';
var tvID = 0;
var slope = -1;

document.getElementById( 'movie').addEventListener( 'click', () => {
    if( tvID == 0)
	tvID = window.requestAnimationFrame( bounce);
})

document.getElementById( "start").addEventListener( "click", () => {
    if( animID == 0)
	animID = window.requestAnimationFrame( step);
})

document.getElementById("stop").addEventListener("click", () => {
    window.cancelAnimationFrame( animID);
    window.cancelAnimationFrame( tvID);
    animID = 0;
    tvID = 0;
})

function bounce(){
    ctx.clearRect( 0, 0, c.width, c.height);
    ctx.drawImage( logo
		   , Math.floor( Math.random() * 520) // xcor
		   , Math.floor( Math.random() * 550) // ycor
		   , 80 // length
		   , 50 // width
		 )
    
    if( tvID != 0){
	window.requestAnimationFrame( bounce);
    }
}

function step(){
    if(!shrink){ //expanding
	progress += 1;
	if(progress >= c.width/2) shrink = true; //if the radius exceeds the canvas screen
    }else{ //shrinking
	progress -= 1;
	if(progress <= 0){ //if the radius goes below zero
	    shrink = false;
	    progress = 0; //starting the cycle over again
	}
    }
    ctx.beginPath();
    ctx.clearRect(0, 0, c.width, c.height); //clearing the screen for the shrinking
    //filling the circle
    ctx.arc(c.width/2, c.height/2, progress, 0, 2 * Math.PI);
    ctx.fillStyle = "lightblue";
    ctx.fill();
    ctx.stroke();
    if( animID != 0)
	window.requestAnimationFrame(step);
}

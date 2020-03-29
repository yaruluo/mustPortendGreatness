// Team Club Penguinners
// Yaru && Tiff
// SoftDev1 pd1
// K#12: Connect the Dots
// 2020-03-30

var pic = document.getElementById("vimage");
var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
var firstClick = true;

c.setAttribute("cx", 0);
c.setAttribute("cy", 0);
c.setAttribute("r", "5");
c.setAttribute("fill", "orange");
c.setAttribute("stroke", "black");

pic.appendChild(c);
pic.addEventListener( "click", function( e){
    console.log( 'click');
    console.log( e.offsetX);
    console.log( e.offsetY);
    c.setAttribute( 'cx', e.offsetX);
    c.setAttribute( 'cy', e.offsetY);

   
});
    

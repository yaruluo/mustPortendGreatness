// Pratham Rawat and Yaru Luo
//SoftDev pd1
// K04 -- I see a red door
// 2020 - 02 - 05

// Constants for Drawing
const BOX_SIDE_LENGTH = 50;
const CIRCLE_RADIUS = 5;

var mode = "circle"; //Mode for which shape to draw
var c = document.getElementById('slate'); // Retrieves DOM objext for canvas
var ctx = c.getContext("2d"); // Creates context element objext for Canvas

// Event listener for drawing on canvas
c.addEventListener("click", function(e) {
  console.log("clik");
  var rect = c.getBoundingClientRect();
  if(mode == "box") {
    ctx.fillRect(event.clientX - rect.x, e.clientY - rect.y , BOX_SIDE_LENGTH, BOX_SIDE_LENGTH);
  } else {
    ctx.arc(e.clientX - rect.x, e.clientY - rect.y, CIRCLE_RADIUS, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
});

// Event listener for toggle button
document.getElementById('toggle').addEventListener("click", function() {
  console.log("togl");
  if(mode == "box") {
    mode = "circle"
  } else {
    mode = "box"
  }
  document.getElementById('toggle').innerHTML = mode;
});

// Event listener for clear button
document.getElementById('clear').addEventListener("click", function(e) {
  console.log("clr");
  // e.preventDefault();
  ctx.clearRect(00 0, c.height, c.width);
});

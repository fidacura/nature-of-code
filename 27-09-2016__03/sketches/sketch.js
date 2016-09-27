// This was coded while reading:
// "The Nature of Code" by Daniel Shiffman
// http://natureofcode.com/

function setup() {
  var cnv = createCanvas(800,500);
}

function draw () {
  background(60,60,60);

  // One vector for mouse location
  var mouse = createVector(mouseX, mouseY);
  // Another vector for the center of the window
  var center = createVector(width/2,height/2);

  // Vector subtraction
  mouse.sub(center);

  translate(width/2,height/2);
  strokeWeight(2);
  stroke(255);
  line(0,0,mouse.x,mouse.y);
}
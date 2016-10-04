// This was coded while reading:
// "The Nature of Code" by Daniel Shiffman
// http://natureofcode.com/

var angle = 0;
var aVelocity = 0;
var aAcceleration = 0.002;

function setup() {
  createCanvas(800,500);

}

function draw() {
  background(51);

  translate(width/2, height/2);
  rotate(angle);

  stroke(0);
  strokeWeight(2);
  fill(127,127,127);

  line(-60, 0, 60, 0);
  ellipse(60, 0, 16, 16);
  ellipse(-60, 0, 16, 16);

  angle += aVelocity;
  aVelocity += aAcceleration;

}
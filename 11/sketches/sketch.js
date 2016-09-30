// This was coded while reading:
// "The Nature of Code" by Daniel Shiffman
// http://natureofcode.com/

var mover;

function setup() {
  createCanvas(640,360);
  mover = new Mover(); 
}

function draw() {
  background(51);
  
  var wind = createVector(0.01, 0);
  var gravity = createVector(0, 0.1);
  mover.applyForce(wind);
  mover.applyForce(gravity);

  mover.update();
  mover.checkEdges();
  mover.display(); 
}
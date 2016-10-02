// This was coded while reading:
// "The Nature of Code" by Daniel Shiffman
// http://natureofcode.com/

var movers = [];

function setup() {
  createCanvas(800,500);

  for (var i = 0; i < 20; i++) {
    movers[i] = new Mover(random(0.2,5),0,0)
  }
}

function draw() {
  background(51);
  
  for (var i = 0; i < movers.length; i++){
    var wind = createVector(0.01, 0);
    var gravity = createVector(0, 0.1*movers[i].mass);

    var c = 0.01;
    var normal = 1;
    var frictionMag = c * normal;
    var friction = movers[i].velocity.copy();
    friction.mult(-1);
    friction.normalize();
    friction.mult(frictionMag);

    movers[i].applyForce(wind);
    movers[i].applyForce(gravity);
    movers[i].update();
    movers[i].checkEdges();
    movers[i].display(); 
  }
}
// This was coded while reading:
// "The Nature of Code" by Daniel Shiffman
// http://natureofcode.com/

var movers = [];
var attractor;

function setup() {
  createCanvas(800,500);

  for (var i = 0; i < 20; i++) {
    movers.push(new Mover(random(0.1, 2), random(width), random(height)));
  }
  attractor = new Attractor();
}

function draw() {
  background(51);

  attractor.display();

  for (var i = 0; i < movers.length; i++) {
    var force = attractor.calculateAttraction(movers[i]);
    movers[i].applyForce(force);

    movers[i].update();
    movers[i].display();
  }
}
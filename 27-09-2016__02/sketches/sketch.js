// This was coded while reading:
// "The Nature of Code" by Daniel Shiffman
// http://natureofcode.com/

// Location
var position;
var velocity;

function setup() {
  var cnv = createCanvas(800, 500);
  background(60,60,60);
  position = createVector(100,100);
  velocity = createVector(2.5,5);

}

function draw() {
  background(60,60,60);
// Radius relative to the final display ball (helper to calculate bouncing)
  var radius = 50;

// Move the ball according to the speed variables
  position.add(velocity);

// Check for canvas limits for bouncing effects
  if ((position.x > width - radius) || (position.x < radius)) {
    velocity.x = velocity.x * -1;
  }
  if((position.y > height - radius) || (position.y < radius)) {
    velocity.y = velocity.y * -1;
  }

  strokeWeight(0);
  fill(position.x + 50, position.y+10, 140);

  // Display the ball
  ellipse(position.x, position.y, 100, 100)
}
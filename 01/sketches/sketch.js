// This was coded while reading:
// "The Nature of Code" by Daniel Shiffman
// http://natureofcode.com/

// Location
var x = 100;
var y = 100;

// Speed
var xspeed = 2.5;
var yspeed = 3;

function setup() {
  var cnv = createCanvas(800, 500);
}

function draw() {
  background(60,60,60);

// Move the ball according to the speed variables
  x = x + xspeed;
  y = y + yspeed;
  var radius = 50;

// Check for canvas limits for bouncing effects
  if ((x > width - radius) || (x < radius)) {
    xspeed = xspeed * -1;
  }
  if((y > height - radius) || (y < radius)) {
    yspeed = yspeed * -1;
  }

  strokeWeight(0);
  fill(x + 50, y + 10, 140);

  // Display the ball
  ellipse(x, y, 100, 100)
}
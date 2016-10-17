// This was coded while reading:
// "The Nature of Code" by Daniel Shiffman
// http://natureofcode.com/

var oscillators = [];

function setup()  {
  createCanvas(640, 360);
  // Initialize all objects
  for (var i = 0; i < 10; i++) {
    oscillators.push(new Oscillator());
  }
}

function draw() {
  background(51);
  // Run all objects
  for (var i = 0; i < oscillators.length; i++) {
    oscillators[i].oscillate();
    oscillators[i].display();
  }
}
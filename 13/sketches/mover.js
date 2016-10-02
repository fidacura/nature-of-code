// This was coded while reading:
// "The Nature of Code" by Daniel Shiffman
// http://natureofcode.com/

var Mover = function(m,x,y) {
  this.mass = m;
  this.position = createVector(x,y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);

  // Newton's Second Law
  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  };

  // Motion 101 from Chapter 1
  this.update = function() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.acceleration.mult(0);
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 127, 0);
    // Scalling the Size according to mass
    ellipse(this.position.x, this.position.y, this.mass*16, this.mass*16);
  };

  this.checkEdges = function() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }
  };
};
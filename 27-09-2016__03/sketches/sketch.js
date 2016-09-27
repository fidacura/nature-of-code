function setup() {
  var cnv = createCanvas(800,500);
}

function draw () {
  background(60,60,60);

  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width/2,height/2);

  mouse.sub(center);

  translate(width/2,height/2);
  strokeWeight(2);
  stroke(255);
  line(0,0,mouse.x,mouse.y);
}
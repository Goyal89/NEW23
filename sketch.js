function setup() {
  createCanvas(400, 400);
    background(220);
}

function draw() {

  rectMode(RADIUS);
  stroke(120, 150, 300);
  fill(232, 72, 72);
  rect(200, 200, 102, 100);

  rectMode(CENTER);
  stroke(000, 190, 200,50);
  fill(72, 188, 232, 50);
  rect(200, 200, 102, 100);

  arc(89, 50, 20, 60, mouseX, mouseY);
  circle(mouseX,mouseY,80)
  fill(mouse,20,20)
}

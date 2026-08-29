let x, y;
let speed = 3;
let dia = 50;
let jumpspeed = 7;

function setup() {
  createCanvas(1000, 300);
  x = 100;
  y = 200;
}

function draw() {
  clear();
  background(50);

  x += speed;

  if(keyIsDown(32)) {
    y -= jumpspeed;
  }

  fill(255);
  noStroke();
  circle(x, y, dia);
}
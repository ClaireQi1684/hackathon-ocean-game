let speed = 3;
let jumpspeed = 12;
let sunfish, sunhyuk;

function preload() {
  sunhyuk = loadImage("sunhyuk.png");
}

function setup() {
  createCanvas(1500, 600);

  world.gravity.y = 0.5;

  sunfish = new Sprite(100, 200);
  sunfish.img = sunhyuk;
  sunfish.scale = 0.3;
}

function draw() {
  background(50);

  sunfish.x += speed;

  if(keyIsDown(32)) {
    sunfish.y -= jumpspeed;
  }

  fill(255);
  noStroke();
}
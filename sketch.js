let speed;
let jumpspeed = 12;
let button;
let pollutions1, pollutions2, pollutions3;

function preload() {
  sunhyuk = loadImage("sunhyuk.png");
  squidja = loadImage("squidja.png");
  ink = loadImage("pollution.png");
}

function setup() {
  createCanvas(1500, 800);

  sunfish = new Sprite(120, 300);
  sunfish.img = sunhyuk;
  sunfish.scale = 0.25;

  squid = new Sprite(0, 300);
  squid.img = squidja;
  squid.scale = 0.25;

  pollutions1 = new Group();
  for (let i = 0; i < 10; i++) {
    let pollution1 = new Sprite(random(200, 5000), random(150, 700), 25);
    pollution1.img = ink;
    pollution1.scale = 0.1;
    pollutions1.add(pollution1);
  }

  pollutions2 = new Group();
  for (let i = 0; i < 20; i++) {
    let pollution2 = new Sprite(random(200, 5000), random(150, 700), 25);
    pollution2.img = ink;
    pollution2.scale = 0.1;
    pollutions2.add(pollution2);
  }
  pollutions2.visible = false;

  pollutions3 = new Group();
  for (let i = 0; i < 30; i++) {
    let pollution3 = new Sprite(random(200, 5000), random(150, 700), 25);
    pollution3.img = ink;
    pollution3.scale = 0.1;
    pollutions3.add(pollution3);
  }
  pollutions3.visible = false;

  sunfish.collider = 'dynamic';
  sunfish.diameter = 150;

  button = createButton("Regress");
  button.position(750, 450);
  button.style("color", "black");
  button.visible = false;
  button.hide();
}

function squidExploration() {

  camera.x = sunfish.x;

  if(sunfish.overlaps(pollutions1)) {
    sunfish.visible = false;
    squid.visible = false;
    pollutions1.visible = false;
    background(0);
    button.visible = true;
    button.show();
  }

  let easing = 0.07;
  squid.x = lerp(squid.x, sunfish.x - 100, easing);
  squid.y = lerp(squid.y, sunfish.y, easing);

  sunfish.x += speed;
  sunfish.y += 5;

  if(keyIsDown(32)) {
    sunfish.y -= jumpspeed;
  }

  // if(keyIsDown(LEFT_ARROW)) {
  //   sunfish.mirror.x = true;
  // } else if (keyIsDown(RIGHT_ARROW)) {
  //   sunfish.mirror.x = false;
  // }

  noStroke();

}

function level1() {
  speed = 3;
  background(200);

  squidExploration();
}

function draw() {
  level1();
  if (sunfish.x > 5000) {
    sunfish.y = 1000;
    pollutions1.y = 1000;
    squid.y = 1000;
    background(50);
  }
}
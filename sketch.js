let speed;
let jumpspeed = 12;
let button;
let pollutions1, pollutions2, pollutions3;

function preload() {
  sunhyukUnimpressed = loadImage("Sunfish/Sunfish-Unimpressed.png");
  squidjaNeutral = loadImage("Squid/Normal Squid/Squid-Neutral.png");
  sunhyukDead = loadImage("Sunfish/Sunfish-Death.png");
  ink = loadImage("Background & Sea Bunny/Pollution.png");
}

function setup() {
  createCanvas(1500, 800);

  sunfishUnimpressed = new Sprite(120, 300);
  sunfishUnimpressed.img = sunhyukUnimpressed;
  sunfishUnimpressed.scale = 0.25;

  squidNeutral = new Sprite(0, 300);
  squidNeutral.img = squidjaNeutral;
  squidNeutral.scale = 0.25;
  squidNeutral.mirror.x = true;

  sunfishDead = new Sprite();
  sunfishDead.img = sunhyukDead;
  sunfishDead.scale = 0.25;
  sunfishDead.visible = false;

  pollutions1 = new Group();
  for (let i = 0; i < 10; i++) {
    let pollution1 = new Sprite(random(250, 5000), random(150, 700), 25);
    pollution1.img = ink;
    pollution1.scale = 0.25;
    pollutions1.add(pollution1);
  }

  pollutions2 = new Group();
  for (let i = 0; i < 20; i++) {
    let pollution2 = new Sprite(random(250, 5000), random(150, 700), 25);
    pollution2.img = ink;
    pollution2.scale = 0.25;
    pollutions2.add(pollution2);
  }
  pollutions2.visible = false;

  pollutions3 = new Group();
  for (let i = 0; i < 30; i++) {
    let pollution3 = new Sprite(random(250, 5000), random(150, 700), 25);
    pollution3.img = ink;
    pollution3.scale = 0.25;
    pollutions3.add(pollution3);
  }
  pollutions3.visible = false;

  sunfishUnimpressed.collider = 'dynamic';
  sunfishUnimpressed.diameter = 150;

  button = createButton("Regress");
  button.position(750, 450);
  button.style("color", "black");
  button.visible = false;
  button.hide();
}

function squidExploration() {

  camera.x = sunfishUnimpressed.x;

  if(sunfishUnimpressed.overlaps(pollutions1)) {
    sunfishDead.x = 750;
    sunfishDead.y = 300;
    camera.x = sunfishDead.x;
    sunfishUnimpressed.visible = false;
    // squidNeutral.visible = false;
    pollutions1.visible = false;
    sunfishDead.visible = true;
    background(0);
    button.visible = true;
    button.show();
  }

  let easing = 0.07;
  squidNeutral.x = lerp(squidNeutral.x, sunfishUnimpressed.x - 100, easing);
  squidNeutral.y = lerp(squidNeutral.y, sunfishUnimpressed.y, easing);

  sunfishUnimpressed.x += speed;
  sunfishUnimpressed.y += 5;

  if(keyIsDown(32)) {
    sunfishUnimpressed.y -= jumpspeed;
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
  if (sunfishUnimpressed.x > 5000) {
    sunfishUnimpressed.y = 1000;
    pollutions1.y = 1000;
    squidNeutral.y = 1000;
    background(50);
  }
}
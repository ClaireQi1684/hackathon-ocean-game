let yjh;
let hsy;

let score = 0;
let seconds = 10;

let sunfish;
let ball;
let cats;
let ink;

let level = 0;
let isUsingSkill;
let isGameOver = false;
let isWin;
let catSpeed;
let button;
let ballSpeed;

let ballTimer = 0;

function preload(){
  //images are placeholders
  yjh = loadImage("images/sunfish.png");
  hsy = loadImage("images/cat.png");
}

function setup() {
  createCanvas(1500, 800); // Sets the game window size

  sunfish = new Sprite();
  sunfish.img = yjh;
  sunfish.scale = 0.1;
  sunfish.color = color(255,255,255);
  sunfish.collider = 'kinematic';
  sunfish.w = 50
  sunfish.h = 71;

  ball = new Group();
  ball.diameter = 5;

  cats = new Group();

  ink = new Group();
  ink.diameter = 5;

  button = createButton("Regress");
  button.position(750, 450);
  button.style("color", 0)
  button.mousePressed(restart);
  button.hide();
}

function draw() {
  if (isGameOver) {
    background(0);

    fill(255, 0, 0);
    textSize(50);
    text("You Died", 700, 400);

    button.show();
    sunfish.hide();
    return;
  }
  background(0, 119, 190);

  textSize(16);
  fill(0);
  text("Score: " + score, 10, 20);

  if (score > 25) {
    level = 2;
  } else if (score > 10) {
    level = 1;
  }

  if (level === 0) {
    ballSpeed = 5;
  } else if (level === 1) {
    ballSpeed = 3;
  } else if (level === 2) {
    ballSpeed = 1;
  }

  if (level === 0) {
    catSpeed = 0.01;
  } else if (level === 1) {
    catSpeed = 0.02;
  } else if (level === 2) {
    catSpeed = 0.03;
  }

  // if (isUsingSKill) {
  //   ballTimer++;
  //   if (ballTimer >= 15) {
  //     let newBall = new ball.Sprite(sunfish.x, sunfish.y);
  //     newBall.color = color(255,255,255);
  //     newBall.overlaps(sunfish);
  //     newBall.direction = b.angleTo(mouse);
  //     ballTimer = 0;
  //   }
  // }

  if (mouse.presses()) {
    let b = new ball.Sprite(sunfish.x, sunfish.y);
    b.color = color(255,255,255);
    b.overlaps(sunfish);
    b.direction = b.angleTo(mouse);
    b.speed = ballSpeed;
  }

  if (kb.pressing("left")){
    sunfish.vel.x = -3;
  } else if (kb.pressing("right")) {
    sunfish.vel.x = 3;
  } else if (kb.pressing("up")) {
    sunfish.vel.y = -3;
  } else if (kb.pressing("down")) {
    sunfish.vel.y = 3;
  } else {
    sunfish.vel.x = 0;
    sunfish.vel.y = 0;
  }

  spawnCats();
  for (let i = cats.length - 1; i >= 0; i--) {
    cats[i].moveTowards(sunfish, catSpeed);
    if (level === 2 && frameCount % 60 === 0) {
      let inkShot = new ink.Sprite(cats[i].x, cats[i].y);
      inkShot.color = color(0);
      inkShot.direction = inkShot.random(0, 360);
      inkShot.speed = 1;
    }
    for(let j = 0; j < ball.length; j++) {
      if (cats[i].collides(ball[j])) {
        cats[i].remove();
        ball[j].remove();
        score++;
      }
    }
    if (cats[i].overlaps(sunfish)) {
      isGameOver = true;
      cats.removeAll();
      break;
    }
  }

  for (let i = ball.length - 1; i >= 0; i--) { //remove balls that go off screen
    if (
      ball[i].x < -20 ||
      ball[i].x > width + 20 ||
      ball[i].y < -20 ||
      ball[i].y > height + 20
    ) {
      ball[i].remove();
    }
  }

}

function spawnCats() {
  if (seconds <= 60 && frameCount % 60 == 0) {
    let side = floor(random(4));
    let c;
    if (side == 0) {
      c = new cats.Sprite(-50, random(0, height));
    } 
    else if (side == 1) {
      c = new cats.Sprite(width + 50, random(0, height));
    } 
    else if (side == 2) {
      c = new cats.Sprite(random(0, width), -50);
    } 
    else if (side == 3) {
      c = new cats.Sprite(random(0, width), height + 50);
    }
    c.img = hsy;
    c.scale = 0.075;
    c.w = 47;
    c.h = 41; //hitbox, change according to image size
  }
}

function restart() {
  isGameOver = false;
  score = 0;
  level = 0;
  ballTimer = 0;

  sunfish.x = width / 2;
  sunfish.y = height / 2;
  sunfish.vel.x = 0;
  sunfish.vel.y = 0;

  button.hide();
  sunfish.show();

  cats.removeAll();
  ball.removeAll();
}

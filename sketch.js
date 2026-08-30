let yjh;
let blob;
let bg;
let dead; //images
let images = [];


let score = 0;
let seconds = 10;

let sunfish; //sprites
let ball;
let cats;

let level = 0; //misc
let isGameOver = false;
let isWin = false;
let catSpeed;
let button;
let ballSpeed;
let blobSize;
let isFacingRight = true;
let spawnRate;
let hitWidth;
let hitLength;
let specialLevel = false;

function preload(){
  yjh = loadImage("Sunfish/Sunfish-Unimpressed.png");
  blob = loadImage("Background & Sea Bunny/Pollution.png");
  bg = loadImage("Background & Sea Bunny/Final_Level.png");
  dead = loadImage("Sunfish/Sunfish-Death.png");
  images[0] = loadImage("Cat/Cat-Angry.png");
  images[2] = loadImage("Cat/Cat-Scared.png");
  images[3] = loadImage("Cat/Cat-Sigh.png");
  images[4] = loadImage("Squid/Corruption Four/Squid-MeltingOne.png");
  images[5] = loadImage("Squid/Corruption Four/Squid-MeltingTwo.png");
  images[6] = loadImage("Squid/Corruption Four/Squid-MeltingThree.png");
  images[1] = loadImage("Squid/Corruption Four/Squid-Nauseous.png");
  images[7] = loadImage("Squid/Corruption One/Squid-Exclamatory-CorruptionOne.png");
  images[8] = loadImage("Squid/Corruption One/Squid-Happy-CorruptionOne.png");
  images[9] = loadImage("Squid/Corruption One/Squid-Neutral-CorruptionOne.png");
  images[10] = loadImage("Squid/Corruption Three/Squid-Neutral-CorruptionThree.png");
  images[11] = loadImage("Squid/Corruption Three/Squid-Happy-CorruptionThree.png");
  images[12] = loadImage("Squid/Corruption Two/Squid-Neutral-CorruptionTwo.png");
  images[13] = loadImage("Squid/Corruption Two/Squid-Happy-CorruptionTwo.png");
  images[14] = loadImage("Squid/Normal Squid/Squid-Neutral.png");
  images[15] = loadImage("Squid/Normal Squid/Squid-Concern.png");
  images[16] = loadImage("Squid/Normal Squid/Squid-Exclamatory.png");
  images[17] = loadImage("Squid/Normal Squid/Squid-Happy.png");
  images[18] = loadImage("Squid/Normal Squid/Squid-Mad.png");
  images[19] = loadImage("Squid/Normal Squid/Placeholder.png");
  images[20] = loadImage("images/cat.png");
  images[21] = loadImage("images/sunfish.png");
}


function setup() {
  createCanvas(1500, 800); // Sets the game window size

  sunfish = new Sprite(); //make the sunfish
  sunfish.img = yjh;
  sunfish.scale = 0.3;
  sunfish.color = color(255,255,255);
  sunfish.collider = 'kinematic';
  sunfish.w = 91;
  sunfish.h = 71;

  ball = new Group();
  ball.diameter = 5;

  cats = new Group();

  button = createButton("Regress"); //regress button
  button.position(750, 400);
  button.style("color", 0)
  button.mousePressed(restart);
  button.hide();
}

function draw() {
  if (isGameOver) {
    gameOver();
    sunfish.vel.x = 0;
    sunfish.vel.y = 0;
    return;
  }
  if (isWin) {
    win();
    return;
  }
  image(bg, 0, 0, 1500, 800);

  textSize(20);
  fill(255);
  text("Score: " + score, 10, 20);

  if (score > 25) {
    level = 2;
  } else if (score > 10) {
    level = 1;
  }

  if (level === 0) { //levels settings
    catSpeed = 0.01;
    ballSpeed = 5;
    blobSize = 0.15
    spawnRate = 70;
    hitWidth = 40;
    hitLength = 40;
  } else if (level === 1) {
    catSpeed = 0.02;
    ballSpeed = 3;
    blobSize = 0.3;
    spawnRate = 60;
    hitWidth = 75;
    hitLength = 75;
  } else if (level === 2) {
    catSpeed = 0.03;
    ballSpeed = 1;
    blobSize = 0.45;
    spawnRate = 50;
    hitWidth = 90;
    hitLength = 90;
  }

  if (mouse.presses()) {
    let b = new ball.Sprite(sunfish.x, sunfish.y);
    b.color = color(255,255,255);
    b.overlaps(sunfish);
    b.direction = b.angleTo(mouse);
    b.speed = ballSpeed;
  }

  if (kb.pressing("left")){
    sunfish.vel.x = -3;
    isFacingRight = false;
  } else if (kb.pressing("right")) {
    sunfish.vel.x = 3;
    isFacingRight = true;
  } else if (kb.pressing("up")) {
    sunfish.vel.y = -3;
  } else if (kb.pressing("down")) {
    sunfish.vel.y = 3;
  } else {
    sunfish.vel.x = 0;
    sunfish.vel.y = 0;
  }

  if (isFacingRight) {
    sunfish.mirror.x = false;
  } else {
    sunfish.mirror.x = true;
  }

  spawnCats();
  for (let i = cats.length - 1; i >= 0; i--) {
    cats[i].moveTowards(sunfish, catSpeed);
    let wasHit = false;
    for(let j = 0; j < ball.length; j++) {
      if (cats[i].collides(ball[j])) {
        cats[i].remove();
        ball[j].remove();
        score++;
        wasHit = true;
        break;
      }
    }
    if (wasHit) {
      continue;
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

  if (score > 30 ) {
    isWin = true;
  }
}

function spawnCats() {
  if (frameCount % spawnRate == 0) {
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
    if (specialLevel) {
      c.img = images[floor(random(images.length))];
    } else{
      c.img = blob;
    }
    c.scale = blobSize;
    c.w = hitWidth;
    c.h = hitLength;
  }
}

function restart() {
  isGameOver = false;
  isWin = false;
  score = 0;
  level = 0;

  sunfish.x = width / 2;
  sunfish.y = height / 2;
  sunfish.vel.x = 0;
  sunfish.vel.y = 0;

  button.hide();
  sunfish.img = yjh;

}

function gameOver() {
    sunfish.img = dead;
    button.position(sunfish.x - 30, sunfish.y - 10);
    button.show();

    cats.removeAll();
    ball.removeAll();
    return;
}

function win() {
  specialLevel = true;
  restart();
}

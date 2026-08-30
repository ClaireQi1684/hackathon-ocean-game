let speed;
let jumpspeed = 12;
let button;
let pollutions1, pollutions2, pollutions3;

function preload() {
  sunfishUnimpressed = loadImage("Sunfish/Sunfish-Unimpressed.png");
  sunfishDeath = loadImage("Sunfish/Sunfish-Death.png");
  sunfishConcerned = loadImage("Sunfish/Sunfish-Concerned.png");
  sunfishAngry = loadImage("Sunfish/Sunfish-Angry.png");

  //Squid
    //Normal squid
    squidNeutral = loadImage("Squid/Normal Squid/Squid-Neutral.png");
    squidMad = loadImage("Squid/Normal Squid/Squid-Mad.png");
    squidHappy = loadImage("Squid/Normal Squid/Squid-Happy.png");
    squidExclamatory = loadImage("Squid/Normal Squid/Squid-Exclamatory.png");
    squidConcern = loadImage("Squid/Normal Squid/Squid-Concern.png");

    //Corruption one
    squidExclamatoryCorruptionOne = loadImage("Squid/Corruption One/Squid-Exclamatory-CorruptionOne.png");
    squidHappyCorruptionOne = loadImage("Squid/Corruption One/Squid-Happy-CorruptionOne.png");
    squidNeutralCorruptionOne = loadImage("Squid/Corruption One/Squid-Neutral-CorruptionOne.png");

    //Corruption two
    squidHappyCorruptionTwo = loadImage("Squid/Corruption Two/Squid-Happy-CorruptionTwo.png");
    squidNeutralCorruptionTwo = loadImage("Squid/Corruption Two/Squid-Neutral-CorruptionTwo.png");

    //Corruption three
    squidHappyCorruptionThree = loadImage("Squid/Corruption Three/Squid-Happy-CorruptionThree.png");
    squidNeutralCorruptionThree = loadImage("Squid/Corruption Three/Squid-Neutral-CorruptionThree.png");

    //Corruption four
    squidMeltingOne = loadImage("Squid/Corruption Four/Squid-MeltingOne.png");
    squidMeltingTwo = loadImage("Squid/Corruption Four/Squid-MeltingTwo.png");
    squidMeltingThree = loadImage("Squid/Corruption Four/Squid-MeltingThree.png");
    squidNauseous = loadImage("Squid/Corruption Four/Squid-Nauseous.png");

  //Cat
  catAngry = loadImage("Cat/Cat-Angry.png");
  catScared = loadImage("Cat/Cat-Scared.png");
  catSigh = loadImage("Cat/Cat-Sigh.png");
  
  //Pollution, sea bunny, and background elements
  seaBunny = loadImage("Background & Sea Bunny/Sea-Bunny.png");
  pollution = loadImage("Background & Sea Bunny/Pollution.png");
  ocean = loadImage("Background & Sea Bunny/Ocean.png");
  finalLevel = loadImage("Background & Sea Bunny/Final_Level.png");
}

function setup() {
  createCanvas(1500, 800);

  bgSprites = new Group();
  for (let i = 0; i < 20; i++) {
    let bgSprite = new Sprite(i * 1500, 400);
    bgSprite.img = ocean;
    bgSprite.scale = 1;
    bgSprite.visible = true;
    bgSprite.collider = 'none';
    // bgSprite.autoCull = true;
  }

  sunfishUnimpressedS = new Sprite(120, 300);
  sunfishUnimpressedS.img = sunfishUnimpressed;
  sunfishUnimpressedS.scale = 0.25;

  squidNeutralS = new Sprite(0, 300);
  squidNeutralS.img = squidNeutral;
  squidNeutralS.scale = 0.25;
  squidNeutralS.mirror.x = true;

  sunfishDeadS = new Sprite();
  sunfishDeadS.img = sunfishDeath;
  sunfishDeadS.scale = 1.5;
  sunfishDeadS.visible = false;

  pollutions1 = new Group();
  for (let i = 0; i < 10; i++) {
    let pollution1 = new Sprite(random(300, 5000), random(150, 700), 25);
    pollution1.img = pollution;
    pollution1.scale = 0.25;
    pollutions1.add(pollution1);
  }
  pollutions1.visible = false;

  pollutions2 = new Group();
  for (let i = 0; i < 20; i++) {
    let pollution2 = new Sprite(random(300, 5000), random(150, 700), 25);
    pollution2.img = pollution;
    pollution2.scale = 0.25;
    pollutions2.add(pollution2);
  }
  // pollutions2.visible = true;
  pollutions2.visible = false;

  pollutions3 = new Group();
  for (let i = 0; i < 30; i++) {
    let pollution3 = new Sprite(random(300, 5000), random(150, 700), 25);
    pollution3.img = pollution;
    pollution3.scale = 0.25;
    pollutions3.add(pollution3);
  }
  // pollutions3.visible = false;
  pollutions3.visible = true;

  sunfishUnimpressedS.collider = 'kinematic';
  sunfishUnimpressedS.diameter = 125;
  sunfishUnimpressedS.gravityScale = 0;

  button = createButton("Regress");
  button.position(750, 450);
  button.style("color", "black");
  button.mousePressed(restart);
  button.visible = false;
  button.hide();
}

function squidExploration() {

  camera.x = sunfishUnimpressedS.x;
  // bgSprite.x = camera.x;
  // camera.y = 400;

  if(sunfishUnimpressedS.overlaps(pollutions3)) {
    sunfishDeadS.x = sunfishUnimpressedS.x + 200;
    sunfishDeadS.y = 450;
    camera.x = sunfishDeadS.x;
    sunfishUnimpressedS.visible = false;
    squidNeutralS.visible = false;
    // pollutions2.visible = false;
    pollutions3.visible = false;
    sunfishDeadS.visible = true;
    button.visible = true;
    button.show();
  }

  let easing = 0.07;
  squidNeutralS.x = lerp(squidNeutralS.x, sunfishUnimpressedS.x - 100, easing);
  squidNeutralS.y = lerp(squidNeutralS.y, sunfishUnimpressedS.y, easing);

  sunfishUnimpressedS.x += speed;
  sunfishUnimpressedS.y += 5;

  if(keyIsDown(32)) {
    sunfishUnimpressedS.y -= jumpspeed;
  }

  noStroke();

}

function level1() {
  // speed = 5;
  speed = 7;
  background(200);

  squidExploration();
}

function restart() {
  sunfishUnimpressedS.x = 120;
  sunfishUnimpressedS.y = 300;
  sunfishUnimpressedS.visible = true;
  squidNeutralS.visible = true;
  camera.y = CENTER;
  sunfishDeadS.visible = false;
  camera.x = 120;
  camera.y = 400;
  // pollutions2.visible = true;
  pollutions3.visible = true;
  camera.x = sunfishUnimpressedS.x;
  button.visible = false;
  button.hide();
  level1();
}

function draw() {
  level1();
  if (sunfishUnimpressedS.x > 6000) {
    sunfishUnimpressedS.visible = false;
    // pollutions2.visible = false;
    pollutions3.visible = false;
    squidNeutralS.visible = false;
    bgSprites.visible = false;
    clear();
    background(50);
    textSize(20);
    fill(255);
    textAlign(CENTER, CENTER);
    text("You won! Next game...", camera.x, 100);
  }
}
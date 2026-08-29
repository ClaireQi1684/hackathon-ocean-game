// Press a button to choose your path
// See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;

function preload() {

  //Sunfish
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

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  background("pink");
  text(
    "Welcome to screen 0. This is the home screen.",
    width / 2,
    height / 2 - 100
  );

  // Create buttons for all screens

}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button


  // Add A1 button


  // Add A2 button


  // Check enter button

}

/* FUNCTIONS TO DISPLAY SCREENS */

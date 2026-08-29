let ballX = 200;
let ballY = 0;
let ballSpeed = 3;
let score = 0;

let catcher, fallingObject;

function preload(){
  
}

function setup() {
  createCanvas(400, 400); // Sets the game window size

  //Create catcher 
  catcher = new Sprite(200,380,100,20);
  catcher.color = color(95,158,160);
  catcher.collider = 'kinematic';
  
  //Create falling object
  fallingObject = new Sprite(100,0,10);
  fallingObject.color = color(0,128,128);
  fallingObject.vel.y = 3;
}

function draw() {
  background(220); // Clears the screen every frame


  // Draw the paddle controlled by the mouse at the bottom

  if (kb.pressing("left")){
    catcher.vel.x = -3;
  } else if (kb.pressing("right")) {
    catcher.vel.x = 3;
  } else {
    catcher.vel.x = 0;
  }

  // // Check for collision (catching the ball)
  // if (ballY >= height - 45 && ballX >= mouseX - 40 && ballX <= mouseX + 40) {
  //   score += 1;
  //   ballSpeed += 0.5; // Make the game harder each catch
  //   resetBall();
  // }

  // // Display the score
  // fill(0);
  // textSize(18);
  // text("Score: " + score, 20, 30);
}

// function resetBall() {
//   ballY = 0;
//   ballX = random(30, width - 30);
// }
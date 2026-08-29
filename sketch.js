let ballX = 200;
let ballY = 0;
let ballSpeed = 3;
let score = 0;

function setup() {
  createCanvas(400, 400); // Sets the game window size
}

function draw() {
  background(220); // Clears the screen every frame

  // Draw and move the falling ball
  fill(255, 0, 0);
  circle(ballX, ballY, 30);
  ballY += ballSpeed;

  // Reset ball if it falls off the bottom
  if (ballY > height) {
    resetBall();
  }

  // Draw the paddle controlled by the mouse at the bottom
  fill(0, 0, 255);
  rect(mouseX - 40, height - 30, 80, 15);

  // Check for collision (catching the ball)
  if (ballY >= height - 45 && ballX >= mouseX - 40 && ballX <= mouseX + 40) {
    score += 1;
    ballSpeed += 0.5; // Make the game harder each catch
    resetBall();
  }

  // Display the score
  fill(0);
  textSize(18);
  text("Score: " + score, 20, 30);
}

function resetBall() {
  ballY = 0;
  ballX = random(30, width - 30);
}
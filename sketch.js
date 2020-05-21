var ball,ballImage,paddleImage,paddle;
function preload() {
  ballImage = loadImage("ball.png")

  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(50,200,50,50)
  paddle = createSprite(350,200,40,100)
  ball.velocityX = 9

   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  Edges = createEdgeSprites()
  ball.addImage(ballImage);
  
  ball.bounceOff(Edges[0])
  ball.bounceOff(Edges[2]) 
  ball.bounceOff(Edges[3])
  
  paddle.bounce(Edges[2])
  paddle.bounce(Edges[3])

  if (ball.bounceOff(paddle))
  {
     randomVelocity()
  }

  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  if (ball.x > 400) 
  {
    ball.x = 50
    ball.y = 200
    ball.velocityY = 0
    ball.velocityX = 9;
  }
  
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y - 20
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 20
  }
  drawSprites();
  
}

function randomVelocity()
{

  ball.velocityY = random(-15,15)
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}


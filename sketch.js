var bathAnim, drinkAnim, eatAnim, gymAnim, moveAnim, issImg, sleepImg, brushImg
var astro, iss

function preload() {
  bathAnim = loadAnimation("bath1.png","bath2.png")
  brushImg = loadImage("brush.png")
  drinkAnim = loadAnimation("drink1.png","drink2.png")
  eatAnim = loadAnimation("eat1.png","eat2.png")
  gymAnim = loadAnimation("gym11.png","gym12.png")
  issImg = loadImage("iss.png")
  sleepImg = loadImage("sleep.png")
  brushImg = loadImage("brush.png")
  moveAnim = loadAnimation("move.png","move1.png")
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg)
  iss.scale = 0.2

  astro = createSprite(400,275)
  astro.addImage(sleepImg)
  astro.scale = 0.1
  astro.setCollider("rectangle",0,0,1100,2500)

  edges = createEdgeSprites()

}

function draw() {
  background(255,255,255);  

  if (keyDown("UP_ARROW")) {
    astro.addImage("brush",brushImg)
    astro.changeAnimation("brush")
    astro.velocityX = 0
    astro.velocityY = 0
  }
  if (keyDown("DOWN_ARROW")) {
    astro.addAnimation("workout",gymAnim)
    astro.changeAnimation("workout")
    astro.velocityX = 0
    astro.velocityY = 0
  }
  if (keyDown("LEFT_ARROW")) {
    astro.addAnimation("bath",bathAnim)
    astro.changeAnimation("bath")
    astro.velocityX = 0
    astro.velocityY = 0
  }
  if (keyDown("RIGHT_ARROW")) {
    astro.addAnimation("eat",eatAnim)
    astro.changeAnimation("eat")
    astro.velocityX = 0
    astro.velocityY = 0
  }
  if (keyDown("M")) {
    astro.addAnimation("moving",moveAnim)
    astro.changeAnimation("moving")
    astro.velocityX = 2
    astro.velocityY = -2
  }

  astro.collide(edges)

  drawSprites();

  textSize(30)
  fill("white")
  text("Instructions:",600,50)

  textSize(15)
  text("UP arrow: Brush",600,75)
  text("DOWN arrow: Workout",600,100)
  text("RIGHT arrow: Eat",600,125)
  text("LEFT arrow: Bath",600,150)
  text("M button: Move",600,175)
}
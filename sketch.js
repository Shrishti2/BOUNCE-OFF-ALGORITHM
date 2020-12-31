var movingRect,fixedRect;
var objectA, objectB, objectC

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  objectA = createSprite(300,450,50,100);
  objectA.shapeColor = "white";

  objectB = createSprite(400,450,50,100);
  objectB.shapeColor = "blue";

  objectC = createSprite(500,450,50,100);
  objectC.shapeColor = "white";

  objectB.velocityX = 2;
  objectC.velocityX = -2;

  objectB.velocityY = 2;
  objectC.velocityY = -2;

}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  

  if(isTouching(movingRect, objectA)){
    movingRect.shapeColor = "red";
    objectA.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    objectA.shapeColor = "white";

  }

  bounceOff(objectB, objectC);
 
  drawSprites();
}
 

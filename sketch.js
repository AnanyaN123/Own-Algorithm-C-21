var movingRect, fixedRect;

function setup() {
  createCanvas(800,800);
  movingRect= createSprite(600, 100, 100, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX=-1;
  movingRect.velocityY=1;


  fixedRect= createSprite(400, 300, 50, 100);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "pink";
  //gameObject2 = createSprite(200,100,50,50);
  //gameObject2.shapeColor = "pink";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "pink";
  gameObject1.velocityX=2;
  gameObject1.velocityY=0;

}

function draw() {
  background(255,255,255);
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;

  if(isTouching(movingRect,gameObject3)){
    movingRect.shapeColor = "blue";
    gameObject3.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "pink";
    gameObject3.shapeColor = "pink";
  }

  bounceOff(movingRect,fixedRect);
  bounceOff(gameObject1, gameObject3);
  drawSprites();
}

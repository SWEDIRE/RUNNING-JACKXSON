var runner, path, lb, rb;
var runnerImg, pathImg;
function preload(){
runnerImg = loadAnimation("Runner-1.png","Runner-2.png","Runner-1.png","Runner-2.png");
pathImg = loadImage("path.png"); 
}

function setup(){
  createCanvas(400,400);
  runner = createSprite(180,340,30,30);
  runner.addAnimation("movingRunner",runnerImg);
  runner.scale = 0.08;
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 0.1;
  lb = createSprite(0,0,100,800);
  lb.visible = false;
  rb = createSprite(400,0,100,800);
  rb.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  runner.x = World.mouseX;
  edges = createEdgeSprites();
  runner.collide(edges[3]);
  runner.collide(lb);
  runner.collide(rb);
  if (path.y > 400){
   path.y = hieght/2;
  }
  drawSprites();
}

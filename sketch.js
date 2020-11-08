var move,fix;

function setup() {
  createCanvas(800,400);
  fix = createSprite(100, 100, 50, 90);
  fix.shapeColor = "red";
  fix.debug = true;
  fix.velocityX = 2;

  move = createSprite(400, 100, 100, 60);
  move.shapeColor = "purple";
  move.debug = true;
  move.velocityX = -2;
  
}

function draw() {
  background("aquamarine");  

  bounceofffu();

  drawSprites();
}

function bounceofffu() {
 if(fix.y-move.y < fix.height/2+move.height/2 &&
   move.y-fix.y < fix.height/2+move.height/2 ){

 fix.velocityY = fix.velocityY*(-1)
 move.velocityY = move.velocityY*(-1)

 }

 if(fix.x-move.x < fix.width/2+move.width/2 &&
  move.x-fix.x < fix.width/2+move.width/2 ){

fix.velocityX = fix.velocityX*(-1)
move.velocityX = move.velocityX*(-1)

}

}
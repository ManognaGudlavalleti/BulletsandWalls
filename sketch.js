var wall,thickness;
var bullet,speed,weight;
var x=0;
function setup() {
  createCanvas(1600,400);
  thickness=random(35,83);
  speed=random(223,321);
  weight=random(30,52);
 
  bullet = createSprite(50,200,20,10);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2);
  //fill(80,80,80); 
  wall.shapeColour = "blue";
  bullet.velocityX = speed;
  
}

function draw() {
  background(205,153,0); 
  var x = 0;
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/22500;
    if (damage < 10){
      bullet.shapeColor=color(0,255,0);
    }
  }
  if( damage >100 && damage <150) {
    bullet.shapeColor=color(230,230,0);
  }
  if(damage > 15){
    bullet.shapeColor=color(255,0,0);
  }

function hasCollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallleftEdge=lwall.x;
  if(bulletRightEdge>=wall.LeftEdge)
  {
    return true    
  }
    return false;
  }
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10){
  wall.shapeColor=color(255,0,0);
}

if(damage<10){
  wall.shapeColor=color(0,255,0);
}
}

drawSprites();

}




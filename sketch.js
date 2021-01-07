var car,wall,speed,weight;



function setup() {
  createCanvas(800,400);
car = createSprite(200,100,234,233);
wall = createSprite(344,132,563,421);
speed = random(21,23);
weight = random (42,21);
car.velocityX = speed 

}

function draw() {
 background(255,255,255); 
 if (wall.x-car-x < (car.width+wall.width)/2)
 {
   car.velocityX = 0;
   var deformation = 0.5 * weight * speed * speed/22509;
   if (deformation>180)
   {
     car.shapeColor(255,0,0);
   }

   {
     if (deformation<180 && deformation>100)
   }

   {
     car.shapeColor = color(230,230,0);
   }

   {
     if (deformation<100);
   }

   {
     car.shapeColor = color(0,255,0);
   }
 }
 

 }
  drawSprites();

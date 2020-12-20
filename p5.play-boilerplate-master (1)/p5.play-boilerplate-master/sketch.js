var car, wall, speed, weight;


function setup() {
    createCanvas(1200,400);
    speed = random(55, 90);
    weight = random(400, 1500);
    car = createSprite(50, 200, 50, 50);
    wall = createSprite(1140, 200, 60, height/2);
    wall.shapeColor = color(80, 80, 80);
    car.velocityX = speed;
}

function draw() {
    background(255,255,255);
    
    bounceOff(car, wall);
    


    drawSprites();
}


function bounceOff(a, b){
    if(a.x - b.x < a.width/2 + b.width/2 && b.x - a.x < b.width/2 + a.width/2 && a.y - b.y < a.height/2 + b.height/2 && b.y - a.y < b.height/2 + a.height/2){
      a.velocityX = a.velocityX * (-1);
      b.velocityX = b.velocityX * (-1);
      a.velocityY = a.velocityY * (-1);
      b.velocityY = b.velocityY * (-1);
      if((speed ** 2) * weight / 45000 > 180){
          car.shapeColor = color(255, 0, 0);
      }
      if((speed ** 2) * weight / 45000 < 180 && (speed ** 2) * weight > 80){
          car.shapeColor = color(230, 230, 0);
      }
      if((speed ** 2) * weight / 45000 < 80){
          car.shapeColor = color(0, 255, 0);
      }
    }
    if(a.velocityX < 0){
        a.velocityX += a.velocityX / 5 * (-1);
    }

}
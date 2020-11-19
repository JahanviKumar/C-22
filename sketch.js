const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engineVar,worldVar;
var ground;
var ball;


function setup() {
  createCanvas(400,400);
 
  engineVar=Engine.create();
  worldVar= engineVar.world;

  var option={

    isStatic:true
  }

  ground=Bodies.rectangle(200,390,200,50,option);
   World.add(worldVar,ground);

   var ball_option={

    restitution:2.0
  }
   ball=Bodies.circle(200,100,20,ball_option)
   World.add(worldVar,ball)
  
  
}

function draw() {
  background(0);  
  rectMode(CENTER);
  Engine.update(engineVar);
  rect(ground.position.x,ground.position.y,400,50)

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}
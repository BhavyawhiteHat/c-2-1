
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	let engine;
	let world;
	
	var ball;
	var ground;
	var left;
	var right;
    var side1;
    var side2;
}


function setup() {
	createCanvas(1265, 606);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground =new Ground(width/2,595,width,20);
    left = new Ground (850,525,20,120);
	right = new Ground (1033,525,20,120);
	side1 = new Ground (7,50,12,1155);
	side2 = new Ground (1260,10,12,1190);

	ball = Bodies.circle(200,60,20,ball_options);
	World.add (world,ball);
	
	var ball_options = {
		restitution : 0.3,
		isStatic: false,
		friction : 0,
		density : 1,
	}

	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  ground.display();
  left.display();
  right.display();
  side1.display();
  side2.display();
  Engine.update(engine);
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){

	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.09,y:-0.09} ) 
  
  
}
}


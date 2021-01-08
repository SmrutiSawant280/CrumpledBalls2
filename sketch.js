
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustBinImg,paperImg;


/*function preload(){
   dustBinImg = loadImage("dustbingreen.png");
   paperImg = loadImage("paper.png");



}*/
function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(width/2,670,width,20);
    ball = new Ball(200,450,40);
    //ball.addImage("paper.png");
    box = new Box(1200,650);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball.display();
  box.display();
 //drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter. Body.applyForce(ball.body,ball.body.position,{x : 85,y : -85});
  }
}




var box1, box2, box3, paperObject, groundSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Con = Matter.Constraint;



function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	
	
	paper1 = new paper(200,450,40)
    box1 = new box(620,height-140,150,200)
	gr = new ground(width/2,670,width,20)
    s1 = new slingshot(paper1.body,{x:200, y:400})
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("white");
  gr.display();
  box1.display();
  paper1.display();
  s1.display();
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(paper1.body,{x:mouseX, y:mouseY})
 }

 function mouseReleased(){
    s1.fly()
 }
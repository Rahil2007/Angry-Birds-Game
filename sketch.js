//namespacing- aliasing - aka
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world;
var box1,box2, box3, box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird
var backgroundImg;
var platform;
var slingshot,ssling1,sling2;

function preload() {
   backgroundImg=loadImage("sprites/bg.png");
   sling1=loadImage("sprites/sling1.png");
   sling2=loadImage("sprites/sling2.png");
}


function setup() {
  createCanvas(1200,400);
  //pixelDensity(0.5)
  //console.log(displayDensity());

  //create an engine
  engine = Engine.create();
  world = engine.world;

  //restitution - bounciness - 0-1 
  

  // creating a box from the class
  box1 = new Box(700,350,60,60);

  box2 = new Box(900,350,60,60);

  box3 = new Box(700,270,60,60);
  
  box4 = new Box(900,270,60,60);

  box5 = new Box(800,140,60,60);

  ground = new Ground(600,390,1200,20);
   
  pig1 = new Pig(800,355);

  pig2 = new Pig(800,275); 

  log1 = new Log(800,310,260,PI/2);

  log2 = new Log(800,230,260,PI/2);

  log3 = new Log(750,130,135,PI/6);

  log4 = new Log(850,130,135,PI/-6);

  bird = new Bird(230,60);

  platform = new Ground(150,280,300,200);

  slingshot = new Slingshot(bird.body,{x: 230,y: 60});

  //RADIANS - DEGREES
  //180 degrees = PI radians 
  //90 = PI/2


  //run the engine
  Engine.run(engine);
  
}

function draw() {
  background(backgroundImg);  
  rectMode(CENTER);

  //text(mouseX+","+mouseY,mouseX,mouseY);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  image(sling1,240,110,50,140);
  bird.display();
  slingshot.display();
  image(sling2,205,80,50,80);
  platform.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
      slingshot.attach(bird.body)
    }
}
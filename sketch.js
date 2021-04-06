//namespacing- aliasing - aka
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var box1,box2, box3, box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird
var backgroundImg
var platform

function preload() {
   backgroundImg=loadImage("sprites/bg.png");
}


function setup() {
  createCanvas(2400,800);
  pixelDensity(0.5)
  console.log(displayDensity());

  //create an engine
  engine = Engine.create();
  world = engine.world;

  //restitution - bounciness - 0-1 
  

  // creating a box from the class
  box1 = new Box(1400,700,120,120);

  box2 = new Box(1700,700,120,120);

  box3 = new Box(1400,440,120,120);
  
  box4 = new Box(1700,440,120,120);

  box5 = new Box(1550,280,120,120)

  ground = new Ground(1200,780,2400,40);
   
  pig1 = new Pig(1550,700);

  pig2 = new Pig(1550,440)  

  log1 = new Log(1550,520,420,PI/2);

  log2 = new Log(1550,360,420,PI/2)

  log3 = new Log(1475,220,250,PI/6)

  log4 = new Log(1625,220,250,PI/-6)

  bird = new Bird(100,100)

  platform = new Ground(350,535,700,450)

  //RADIANS - DEGREES
  //180 degrees = PI radians 
  //90 = PI/2


  //run the engine
  Engine.run(engine);
  
}

function draw() {
  background(backgroundImg);  
  rectMode(CENTER);

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
  bird.display();
  platform.display();

}
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
var bgImage;
var score = 0;
var gameState
var gameState = "OnSling"


//Types of data
//Primary -
  //Number 
  var num = 12;

  //String
  var str = "Hello World"

  //Boolean
  var bool = true

  //Null
  var obj;
  console.log(obj)

  obj = null
  console.log(obj)

  //Undefined

// Data Structure - Array
   var arr = [1,2,3,4,5]
   console.log(arr)
   console.log(arr[2])
   console.log(arr.length)

   var arr2 = [12,"Text", null, false]

   var arr3 = [[1,2],[3,4],[5,6]]
   console.log(arr3)
   console.log(arr3[1][1])
   console.log(arr3[2][1])
   
   arr3.push("Testing")
   console.log(arr3)

   arr3.pop()
   console.log(arr3)

   // JSON - JavaScript Object Notation
   var obj = {
     position: {x:0,y:0}
   }

   console.log(obj.position.x);

   //API -  Application Pogramming Interface
   
function preload() {
   backgroundImg=loadImage("sprites/bg.png");
   sling1=loadImage("sprites/sling1.png");
   sling2=loadImage("sprites/sling2.png");
   getBgImage();
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
  if(bgImage){
   background(bgImage);  
  }else {
    background("white");
  }
  rectMode(CENTER);

  //text(mouseX+","+mouseY,mouseX,mouseY);
  fill("black");
  textSize(32);
  text("Score: " + score ,20,50 );
  textSize(26);
  text("Press Space To Reset The Bird" , 500 , 50 );
  text("Press R To Play The Game Again" , 490 , 80 )
  

  pig1.score();
  pig2.score();
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
  if(gameState === "OnSling" && bird.body.position.x < 250 && bird.body.position.x > 210){
  Matter.Body.setPosition(bird.body,{x: mouseX, y: mouseY});
  }
}

function mouseReleased(){
  slingshot.fly();
  gameState = "launch";
}

function keyPressed(){
    if(keyCode===32){
      Matter.Body.setPosition(bird.body,{x: 230 ,y: 60})
      Matter.Body.setVelocity(bird.body,{x: 0, y: 0});
      Matter.Body.setAngle(bird.body,0);
      Matter.Body.setAngularVelocity(bird.body,0);
      slingshot.attach(bird.body);
      bird.trail = [];
      gameState = "OnSling";
    }

    if(keyCode === 82){
      window.location.reload();
    }
}

async function getBgImage(){
  var response = await fetch("http://worldtimeapi.org/api/ip");
  var responseJSON = await response.json()
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);
  console.log(hour);
  if(hour>=6 && hour <18){
    bg = "sprites/bg.png"
  }else {
    bg = "sprites/NightBackground.jpg"
  }

  bgImage = loadImage(bg);
  
}


/*
  Debugging tips and tricks :
  DON'T PANIC - Check the console!
  Most common errors -
  1. Typos - spelled a variable or function name wrong.
  2. Incorrect use of a function - not giving the right parameters.
  3. Using variables out of scope - using local variables globally.

  For bugs that do not show up on the console - 
  1.Comment out sections of code - to figure which part is causing problem.
  2.Print variables on your console.
  3.Print messages on your console.

  Always write clean code. 
  */
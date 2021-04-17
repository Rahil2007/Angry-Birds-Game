class Ground{
  constructor(x,y,width,height){
    this.width=width;
    this.height=height;

    var g_options = {
        isStatic : true,
        restitution : 0.2,
        friction: 7
    }
    this.body=Bodies.rectangle(x,y,this.width,this.height,g_options)
    World.add(world,this.body)
    console.log(this.body)
  } 

  display(){
    fill("brown")
    var pos=this.body.position  
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height);
  }
  
}
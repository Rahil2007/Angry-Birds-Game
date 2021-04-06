class BaseClass {
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        var options = {
            restitution: 0.5,
            friction: 3
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        imageMode(CENTER);
        //rectMode(CENTER)
        angleMode(RADIANS);
        push();
        fill("brown");
        translate(pos.x,pos.y);
        rotate(angle);
        image(this.image,0,0,this.width,this.height);
        //rect(0,0,this.width,this.height)
        pop();
    }
}
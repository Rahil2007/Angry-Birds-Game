class Slingshot {
    constructor(bodyA,pointB){

        this.sling3=loadImage("sprites/sling3.png")
        var options= {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
        }
        this.chain=Constraint.create(options);

        World.add(world,this.chain);
    }
    display(){
        if(this.chain.bodyA){
            var posA=this.chain.bodyA.position;
            var posB=this.chain.pointB;
        
            stroke("#441F0C");
            strokeWeight(6);
            if(posA.x<235){
                line(posA.x-20,posA.y,posB.x-35,posB.y);
                line(posA.x+20,posA.y,posB.x+20,posB.y);
                image(this.sling3,posA.x-25,posA.y+5,15,30)

            }else{
                line(posA.x+20,posA.y,posB.x-35,posB.y);
                line(posA.x-10,posA.y-15,posB.x+20,posB.y);
                image(this.sling3,posA.x+25,posA.y,15,30);
            }
        }
    }

    fly(){
        this.chain.bodyA = null;
    }
}
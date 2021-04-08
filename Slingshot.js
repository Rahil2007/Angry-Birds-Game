class Slingshot {
    constructor(bodyA,pointB){

        var options= {
            bodyA: bodyA,
            pointB: pointB,
            length: 50,
            stiffness: 0.08
        }
        this.chain=Constraint.create(options);

        World.add(world,this.chain);
    }
    display(){
        if(this.chain.bodyA){
            var posA=this.chain.bodyA.position;
            var posB=this.chain.pointB;
        

            strokeWeight(4);
            line(posA.x,posA.y,posB.x,posB.y);
        }
    }

    fly(){
        this.chain.bodyA = null;
    }
}
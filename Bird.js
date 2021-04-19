class Bird extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        Matter.Body.setDensity(this.body,0.8);
        this.image = loadImage("sprites/bird.png");
        this.smokeImage = loadImage("sprites/Smoke.png");
        this.trail = [];
    }
    //trail = [[x1,y1],[x2,y2],[x3,y3],[x4,y4]........[xn,yn]] - length = n
    // image(img,this.trail[0][0],this.trail[0][1]) 
    // image(img,this.trail[1][0],this.trail[1][1])
    // image(img,this.trail[2][0],..........[2][1]])
    // image(img,this.trail[n-1][0], this.trail[n-1][1])
    
    display(){
        super.display();
        if(this.body.speed>10 && this.body.position.x > 250){
        var position = [this.body.position.x,this.body.position.y];
        this.trail.push(position);
        }
        
        for(var i = 0; i<this.trail.length; i++){
            image(this.smokeImage,this.trail[i][0],this.trail[i][1])
        }
        
        //console.log(this.trail)
    }
}
class Bird extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        Matter.Body.setDensity(this.body,0.8)
        this.image = loadImage("sprites/bird.png");
    }

    display(){
        super.display();
    }
}
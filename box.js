class Box {
    constructor(x,y){
        
        this.x = x;
        this.y = y;
        this.boxWidth = 200;
        this.boxHeight = 100;
        this.boxThickness = 20;
        this.angle = 0;
        this.bottomBody = Bodies.rectangle(this.x,this.y,this.boxWidth,this.boxThickness,{isStatic : true})
        this.leftBody = Bodies.rectangle(this.x - this.boxWidth/2,this.y - this.boxHeight/2,this.boxThickness,this.boxHeight,{isStatic : true})
        this.rightBody = Bodies.rectangle(this.x + this.boxWidth/2,this.y - this.boxHeight/2,this.boxThickness,this.boxHeight,{isStatic : true})
        this.image = loadImage("dustbingreen.png");
        World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);

    }
    display(){
        var pos = this.bottomBody.position
        var posLeft = this.leftBody.position
        var posRight = this.rightBody.position
        
        
        push();
        translate(pos.x,pos.y);
        imageMode (CENTER);
        angleMode(RADIANS);
        fill("yellow")
        image(this.image,0,-this.boxHeight/2,this.boxWidth,this.boxHeight);
        pop();
    }
}
class Ball {
    constructor(x,y,r){
        this.body = Bodies.circle(50,400,12.5,{restituion:0.3,friction:0.5,density:0.1});
        World.add(world , this.body);

    }
    display(){
        let pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("red");
        stroke("blue");
        rectMode(CENTER);
        ellipse(0,0,25,25);
        pop();
    }
}
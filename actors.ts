class Actor{
    x : number;
    y : number;

    constructor(x : number, y : number) {
        this.x = x;
        this.y = y;
    }
}

class Bird extends Actor{
    constructor(x: number, y: number){
        super(x, y) 
    }

    draw() : void {
        ctx.beginPath();
        ctx.arc(this.x,this.y,10, 0 , Math.PI * 2);
        ctx.closePath();
        ctx.fill() 
    }
}

class Pipes extends Actor{

}
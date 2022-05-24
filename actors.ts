class Actor{
    x : number;
    y : number;

    constructor(x : number, y : number) {
        this.x = x;
        this.y = y;
    }

    draw() : void {
        // Update properties or other Actors in the actorList.
        
    }

    update() : void {
        // Update properties or other Actors in the actorList.
        
    }
}

class Bird extends Actor{
    constructor(x: number, y: number){
        super(x, y) 
    }

    draw() : void {
        ctx.fillStyle = "yellow"
        ctx.beginPath();
        ctx.arc(this.x,this.y,10, 0 , Math.PI * 2);
        ctx.closePath();
        ctx.fill() 
    }
}

class Pipes extends Actor{
    constructor(x: number, y: number){
        super(x, y) 
    }

    draw() : void {
        ctx.fillStyle = "lime"
        ctx.fillRect(this.x, this.y, 100, 200)
    }

    update(): void{
        this.x-= 5
    
        if(this.x > canvas.height + 50){
            actorlist.removeActor(this);
         }
        }
}
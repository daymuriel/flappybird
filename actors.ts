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

    img : HTMLImageElement
    constructor(x: number, y: number){
        super(x, y) 
        this.img = new Image()
        this.img.src = "images/flappy.jpg"
    }

    draw() : void {
        ctx.drawImage(this.img, canvas.width/2 - 20,canvas.height/2 - 35, 75, 75) 
    }
    
}

class Pipes extends Actor{
    x2 : number;
    y2 : number;
    imgup : HTMLImageElement;
    imgdown : HTMLImageElement;

    constructor(x: number, y: number, x2: number, y2: number){
        super(x, y)
        this.x2 = x2;
        this.y2 = y2 
        this.imgup = new Image()
        this.imgup.src = "images/pipeUp.jpg"
        this.imgdown = new Image()
        this.imgdown.src = "images/pipeDown.jpg"
    }

    draw() : void {
        let up : number = (Math.random()*200)+150
        ctx.drawImage(this.imgdown, this.x, this.y, 300, up)
        ctx.drawImage(this.imgup, this.x2, this.y2, 300, up - 150 )
    }

    update(): void{
        this.x-= 15
        this.x2-= 15
    
        if((this.x && this.x2)  > canvas.width){
            actorlist.removeActor(this);
         }
        }
}
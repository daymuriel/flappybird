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
        ctx.drawImage(this.img, this.x, this.y, 75, 75) 
    }

    jump() : void {
        this.y -= 50
    }

    update() : void {
        this.y += 20
    }
    
}

class upPipe extends Actor{
    imgup : HTMLImageElement;
    up : number;

    constructor(x: number, y: number, up? : number){
        super(x, y)
        this.imgup = new Image()
        this.imgup.src = "images/pipeUp.jpg"
        this.up = (Math.random()*200)+150
    }

    draw() : void {
        ctx.drawImage(this.imgup, this.x, this.y, 300, this.up)
    }

    update(): void{
        this.x-= 15
    
        if((this.x)  > canvas.width){
            actorlist.removeActor(this);
         }
        }
}

class downPipe extends Actor{
    imgdown : HTMLImageElement;
    up : number;

    constructor(x: number, y: number, up? : number){
        super(x, y)
        this.imgdown = new Image()
        this.imgdown.src = "images/pipeDown.jpg"
        this.up = (Math.random()*200)+150
    }

    draw() : void {
        ctx.drawImage(this.imgdown, this.x, this.y, 300, this.up + 150 )
    }

    update(): void{
        this.x-= 15
    
        if((this.x)  > canvas.width){
            actorlist.removeActor(this);
         }
        }
}
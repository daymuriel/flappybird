class Actor{
    x : number;
    y : number;

    constructor(x : number, y : number) {
        this.x = x;
        this.y = y;

    }

    draw() : void {
        
    }

    update() : void {
        
    }
 
    top() : number {
        let up : number = (Math.random()*200)+150
        return up
    }
}

class Bird extends Actor{

    img : HTMLImageElement
    speed : number;
    constructor(x: number, y: number){
        super(x, y) 
        this.speed = 0
        this.img = new Image()
        this.img.src = "images/flappy.jpg"
    }

    draw() : void {
        ctx.drawImage(this.img, this.x, this.y, 75, 75) 
    }

    jump() : void {
        this.speed = -7
    }

    update() : void {
        this.speed += 0.7
        this.y += this.speed
    }
    
}

class upPipe extends Actor{
    imgup : HTMLImageElement;
    up : number;
    constructor(x: number, y: number, up?: number){
        super(x, y)
        let top = super.top()
        this.up = top
        this.imgup = new Image()
        this.imgup.src = "images/pipeUp.jpg"
    }

    draw() : void {
        ctx.drawImage(this.imgup, this.x, this.y, 300, this.up)
    }

    update(): void{
        this.x-= 10
    
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
        let top = super.top()
        this.up = top
        this.imgdown = new Image()
        this.imgdown.src = "images/pipeDown.jpg"
    }

    draw() : void {
        ctx.drawImage(this.imgdown, this.x, this.up + 150, 300, canvas.height-(this.up + 150))
    }

    update(): void{
        this.x-= 10
    
        if((this.x)  > canvas.width){
            actorlist.removeActor(this);
         }
        }
}
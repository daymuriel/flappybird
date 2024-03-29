class Actor{
    x : number;
    y : number;

    constructor(x : number, y : number) {
        this.x = x;
        this.y = (Math.random()*200)+150

    }

    draw() : void {
    }

    update() : void {
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

        if ((this.y) > (canvas.height)){
            death();
            actorlist.removeActor(this);
        } 

    }
    
}
class PairPipe extends Actor{
    imgup : HTMLImageElement;
    imgdown : HTMLImageElement;
    constructor(x: number, y: number){
        super(x, y)
        this.imgup = new Image()
        this.imgup.src = "images/pipeUp.jpg"
        this.imgdown = new Image()
        this.imgdown.src = "images/pipeDown.jpg"
    }

    draw() : void {
        ctx.drawImage(this.imgup, this.x, 0, 300, this.y)
        ctx.drawImage(this.imgdown, this.x, this.y + 150, 300, canvas.height-(this.y + 150))
    }

    update(): void{
        this.x-= 10
    
        if((this.x) < (-canvas.width/2)){
            actorlist.removeActor(this);
            updateScore();
        }

        if ((this.x + (0.42 * 300) <= bird.x) && (this.x + (0.55 * 300) >= bird.x)){
            if((bird.y + 30 <= this.y)||(bird.y + 30 >= this.y+150)){
                death()
            }
        }
    }
}
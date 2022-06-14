"use strict";
class Actor {
    constructor(x, y) {
        this.x = x;
        this.y = (Math.random() * 200) + 150;
    }
    draw() {
    }
    update() {
    }
}
class Bird extends Actor {
    constructor(x, y) {
        super(x, y);
        this.speed = 0;
        this.img = new Image();
        this.img.src = "images/flappy.jpg";
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, 75, 75);
    }
    jump() {
        this.speed = -7;
    }
    update() {
        this.speed += 0.7;
        this.y += this.speed;
    }
}
class PairPipe extends Actor {
    constructor(x, y) {
        super(x, y);
        this.imgup = new Image();
        this.imgup.src = "images/pipeUp.jpg";
        this.imgdown = new Image();
        this.imgdown.src = "images/pipeDown.jpg";
    }
    draw() {
        ctx.drawImage(this.imgup, this.x, 0, 300, this.y);
        ctx.drawImage(this.imgdown, this.x, this.y + 150, 300, canvas.height - (this.y + 150));
    }
    update() {
        this.x -= 10;
        if ((this.x) < (-canvas.width / 2)) {
            actorlist.removeActor(this);
            updateScore();
        }
    }
}

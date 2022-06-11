"use strict";
class Actor {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
    }
    update() {
    }
    top() {
        let up = (Math.random() * 200) + 150;
        return up;
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
        this.speed += 0.5;
        this.y += this.speed;
    }
}
class upPipe extends Actor {
    constructor(x, y, up) {
        super(x, y);
        let top = super.top();
        this.up = top;
        this.imgup = new Image();
        this.imgup.src = "images/pipeUp.jpg";
    }
    draw() {
        ctx.drawImage(this.imgup, this.x, this.y, 300, this.up);
    }
    update() {
        this.x -= 10;
        if ((this.x) > canvas.width) {
            actorlist.removeActor(this);
        }
    }
}
class downPipe extends Actor {
    constructor(x, y, up) {
        super(x, y);
        let top = super.top();
        this.up = top;
        this.imgdown = new Image();
        this.imgdown.src = "images/pipeDown.jpg";
    }
    draw() {
        ctx.drawImage(this.imgdown, this.x, this.y, 300, this.up + 150);
    }
    update() {
        this.x -= 10;
        if ((this.x) > canvas.width) {
            actorlist.removeActor(this);
        }
    }
}

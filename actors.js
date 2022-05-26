"use strict";
class Actor {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        // Update properties or other Actors in the actorList.
    }
    update() {
        // Update properties or other Actors in the actorList.
    }
}
class Bird extends Actor {
    constructor(x, y) {
        super(x, y);
        this.img = new Image();
        this.img.src = "images/flappy.jpg";
    }
    draw() {
        ctx.drawImage(this.img, canvas.width / 2 - 20, canvas.height / 2 - 35, 75, 75);
    }
}
class Pipes extends Actor {
    constructor(x, y, x2, y2) {
        super(x, y);
        this.x2 = x2;
        this.y2 = y2;
        this.imgup = new Image();
        this.imgup.src = "images/pipeUp.jpg";
        this.imgdown = new Image();
        this.imgdown.src = "images/pipeDown.jpg";
    }
    draw() {
        ctx.drawImage(this.imgdown, this.x, this.y, 300, 200);
        ctx.drawImage(this.imgup, this.x2, this.y2, 300, 200);
    }
    update() {
        this.x -= 15;
        this.x2 -= 15;
        if ((this.x && this.x2) > canvas.width) {
            actorlist.removeActor(this);
        }
    }
}

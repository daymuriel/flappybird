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
class upPipe extends Actor {
    constructor(x, y, up) {
        super(x, y);
        this.imgup = new Image();
        this.imgup.src = "images/pipeUp.jpg";
        this.up = (Math.random() * 200) + 150;
    }
    draw() {
        ctx.drawImage(this.imgup, this.x, this.y, 300, this.up);
    }
    update() {
        this.x -= 15;
        if ((this.x) > canvas.width) {
            actorlist.removeActor(this);
        }
    }
}
class downPipe extends Actor {
    constructor(x, y, up) {
        super(x, y);
        this.imgdown = new Image();
        this.imgdown.src = "images/pipeDown.jpg";
        this.up = (Math.random() * 200) + 150;
    }
    draw() {
        ctx.drawImage(this.imgdown, this.x, this.y, 300, this.up + 150);
    }
    update() {
        this.x -= 15;
        if ((this.x) > canvas.width) {
            actorlist.removeActor(this);
        }
    }
}

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
    }
    draw() {
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}
class Pipes extends Actor {
    constructor(x, y) {
        super(x, y);
    }
    draw() {
        ctx.fillStyle = "lime";
        ctx.fillRect(this.x, this.y, 100, 200);
    }
    update() {
        this.x -= 5;
        if (this.x > canvas.height + 50) {
            actorlist.removeActor(this);
        }
    }
}

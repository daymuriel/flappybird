"use strict";
let bird = new Bird(canvas.width / 2 - 20, canvas.height / 2 - 35);
window.addEventListener("load", function () {
    actorlist.addActor(bird);
    let uppipe = new upPipe(400, 0);
    actorlist.addActor(uppipe);
    let downpipe = new downPipe(400, 400);
    actorlist.addActor(downpipe);
});
document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
        bird.jump();
    }
    if (event.key === "ArrowUp") {
        bird.jump();
    }
    if (event.key === "w") {
        bird.jump();
    }
});
setInterval(function () {
    actorlist.addActor(new upPipe(400, 0));
    actorlist.addActor(new downPipe(400, 400));
}, 800);

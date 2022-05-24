"use strict";
let bird = new Bird(canvas.width / 2, canvas.height / 2);
window.addEventListener("load", function () {
    actorlist.addActor(bird);
    let uppipe = new Pipes(0, 0);
    actorlist.addActor(uppipe);
    let downpipe = new Pipes(0, 400);
    actorlist.addActor(downpipe);
});

"use strict";
let bird = new Bird(canvas.width / 2, canvas.height / 2);
window.addEventListener("load", function () {
    actorlist.addActor(bird);
    let setpipe = new Pipes(0, 0, 0, 400);
    actorlist.addActor(setpipe);
});
setInterval(function () {
    actorlist.addActor(new Pipes(400, 0, 400, 400));
    actorlist.addActor(new Pipes(400, 400, 400, 400));
}, 3000);

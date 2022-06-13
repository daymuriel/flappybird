"use strict";
let background = new Image();
background.src = "images/bg.jpg";
background.onload = function () {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
};
let bird = new Bird(canvas.width / 2 - 20, canvas.height / 2 - 35);
window.addEventListener("load", function () {
    pauseDrawing();
    actorlist.addActor(bird);
    let uppipe = new upPipe(400, 0);
    actorlist.addActor(uppipe);
    let downpipe = new downPipe(400, 0);
    actorlist.addActor(downpipe);
});
document.addEventListener("keydown", function (event) {
    if (event.key == "p" || event.key == "P") {
        continueDrawing();
    }
    if (event.key === " " || event.key === "ArrowUp" || event.key === "w") {
        bird.jump();
    }
});
document.addEventListener("click", function (event) {
    bird.jump();
});
setInterval(function () {
    actorlist.addActor(new upPipe(400, 0));
    actorlist.addActor(new downPipe(400, 400));
}, 950);

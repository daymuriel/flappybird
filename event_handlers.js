"use strict";
let background = new Image();
background.src = "images/bg.jpg";
background.onload = function () {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
};
const score = document.querySelector("p");
function updateScore() {
    let count = 0;
    let place = pairPipe.x;
    if ((place) > canvas.width / 2)
        count++;
    score.textContent = String(`Score: ${count}`);
}
let bird = new Bird(canvas.width / 2 - 20, canvas.height / 2 - 35);
window.addEventListener("load", function () {
    pauseDrawing();
    actorlist.addActor(bird);
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
    actorlist.addActor(new pairPipe(400, 0));
}, 950);

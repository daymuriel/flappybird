"use strict";
let background = new Image();
background.src = "images/bg.jpg";
background.onload = function () {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
};
const score = document.querySelector("p");
let count = 0;
score.textContent = String(`Score: ${count}`);
function updateScore() {
    count++;
    score.textContent = String(`Score: ${count}`);
}
let bird = new Bird(canvas.width / 2 - 20, canvas.height / 2 - 35);
window.addEventListener("load", function () {
    pauseDrawing();
    ctx.font = "40px Comic Sans MS";
    ctx.fillText("Press 'P' to Play!", canvas.width / 2 - 152, canvas.height / 2);
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
    if (drawIntervalId !== undefined) {
        actorlist.addActor(new PairPipe(400, 0));
    }
}, 950);

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
// use the bird's x and y to check if it's touching the pipes constantly 
window.addEventListener("load", function () {
    pauseDrawing();
    ctx.font = "40px Comic Sans MS";
    ctx.fillText("Press 'P' to Play!", canvas.width / 2 - 152, canvas.height / 2);
    actorlist.addActor(bird);
});
function death() {
    pauseDrawing();
    ctx.font = "40px Comic Sans MS";
    ctx.fillText("LOSER u died!", canvas.width / 2 - 152, canvas.height / 2);
    ctx.font = "20px Comic Sans MS";
    ctx.fillText("press 'T' to try again", canvas.width / 2 - 152, canvas.height / 2 + 45);
}
document.addEventListener("keydown", function (event) {
    if (event.key == "p" || event.key == "P") {
        continueDrawing();
    }
    if (event.key === " " || event.key === "ArrowUp" || event.key === "w") {
        bird.jump();
    }
    if (event.key === "t") {
        draw();
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

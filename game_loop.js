"use strict";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const FRAME_LENGTH = 35;
const actorlist = new ActorList();
let drawIntervalId = window.setInterval(draw, FRAME_LENGTH);
function draw() {
    // Clear the stage!
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Re-draw all the actors!
    for (const actor of actorlist.actors) {
        actor.draw();
    }
    //Update all actors
    for (const actor of actorlist.actors) {
        actor.update();
    }
}
// Functions to control (pause/continue) the game loop.
function pauseDrawing() {
    if (drawIntervalId !== undefined)
        clearInterval(drawIntervalId);
    drawIntervalId = undefined;
    ctx.font = "40px Comic Sans MS";
    ctx.fillText("Press 'P' to Play!", canvas.width / 2 - 152, canvas.height / 2);
}
function continueDrawing() {
    if (drawIntervalId === undefined)
        drawIntervalId = window.setInterval(draw, FRAME_LENGTH);
}

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const FRAME_LENGTH = 30
const actorlist = new ActorList()

let drawIntervalId : number | undefined = window.setInterval(draw, FRAME_LENGTH);

function draw(){
    // Clear the stage!
    ctx.clearRect(0,0,canvas.width, canvas.height);

    // Re-draw all the actors!
    for (const actor of actorlist.actors){
        actor.draw();
    }

    //Update all actors
    for (const actor of actorlist.actors){
        actor.update();
    }
}

// Functions to control (pause/continue) the game loop.

function pauseDrawing(){
    if (drawIntervalId !== undefined)
        clearInterval(drawIntervalId);
    drawIntervalId = undefined;
}

function continueDrawing(){
    if (drawIntervalId === undefined)
        drawIntervalId = window.setInterval(draw, FRAME_LENGTH);
}
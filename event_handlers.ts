let bird : Bird = new Bird( canvas.width / 2 , canvas.height / 2)
window.addEventListener("load", function() {
    actorlist.addActor(bird);

    let uppipe : upPipe = new upPipe(400,0)
    actorlist.addActor(uppipe)

    let downpipe : downPipe = new downPipe(400,400)
    actorlist.addActor(downpipe)
});

setInterval(function(){
    actorlist.addActor(new upPipe(400, 0))
    actorlist.addActor(new downPipe(400, 400))
}, 1500)
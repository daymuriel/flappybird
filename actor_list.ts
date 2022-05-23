class ActorList {
    actors : Actor[];

    constructor(){
        this.actors = [];
    }

    addActor(actor : Actor) : void {
        if (! this.actors.includes(actor)){
            this.actors.push(actor);
        }
    }
}
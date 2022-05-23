class ActorList {
    actors : Actor[];

    constructor(){
        this.actors = [];
    }

    /**
     * Add actor to list (if not already included)
     * @param actor 
     */
    addActor(actor : Actor) : void {
        if (! this.actors.includes(actor)){
            this.actors.push(actor);
        }
    }
}
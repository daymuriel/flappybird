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

    removeActor( actor : Actor) : void {
        let index : number = this.actors.indexOf(actor);
        if (index > -1)
            this.actors.splice(index, 1);
    }
}
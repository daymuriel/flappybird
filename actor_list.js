"use strict";
class ActorList {
    constructor() {
        this.actors = [];
    }
    addActor(actor) {
        if (!this.actors.includes(actor)) {
            this.actors.push(actor);
        }
    }
    removeActor(actor) {
        let index = this.actors.indexOf(actor);
        if (index > -1)
            this.actors.splice(index, 1);
    }
}

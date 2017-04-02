let isInstantiated;

class Timer {
    constructor() {
        if (isInstantiated === undefined) {
            isInstantiated = this;
            this._time = new Date();
        }
        return isInstantiated;
    }
}

module.exports = Timer;

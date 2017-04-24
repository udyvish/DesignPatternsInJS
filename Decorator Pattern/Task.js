class Task {
    constructor(name) {
        this._name = name;
        this._isComplete = false;
    }
    complete() {
        this._isComplete = true;
        console.log(`Completing task: ${this._name}`);
    }
    save() {
        console.log(`Saving task: ${this._name}`);
    }
}

module.exports = Task;

class Task {
    constructor(task) {
        this._name = task._name;
        this._project = task._project;
        this._priority = task._priority
            ? task._priority
            : 3;
        this._users = task._users;
        this._isComplete = task._isComplete
            ? task._isComplete
            : false;
    }
    complete() {
        this._isComplete = true;
        console.log(`completing task ${this._name}`);
    }
    save() {
        console.log(`saving task ${this._name}`);
    }
}

module.exports = Task;

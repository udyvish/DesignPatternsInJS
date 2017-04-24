module.exports = class Task {
    constructor(task) {
        this._name = task.name;
        this._priority = task.priority;
        this._users = task.users;
        this._project = task.project;
        this._isComplete = task.isComplete;
        this._completedDate = task.completedDate;
    }
}

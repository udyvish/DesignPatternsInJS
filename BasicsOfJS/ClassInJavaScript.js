class Task {
    constructor(name) {
        this._name = name;
        this._isComplete = false;
    }
    complete() {
        console.log(this._name + ' task is completed by prototype function');
        this._isComplete = true;
    }
}

//Above is same as below

var Task = function(name) {
    this._name = name;
    this._isComplete = false;
}

Task.prototype.complete = function() {
    console.log(this._name + ' task is completed by prototype function');
    this._isComplete = true;
}

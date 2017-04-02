let Task = function(name) {
    this._name = name;
    this._isComplete = false;
}

// functions assigned to Task with property will not create a copy for each
// of objects created the functions are attached to prototype and all objects have access to it
Task.prototype.complete = function() {
    console.log(this._name + ' task is completed by prototype function');
    this._isComplete = true;
}

var task1 = new Task('task1');
var task2 = new Task('task2');

task1.complete();
task2.complete();

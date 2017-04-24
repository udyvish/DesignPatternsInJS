let Task = function(name) {
    this._name = name;
    this._isComplete = false;
}

Task.prototype.complete = function() {
    this._isComplete = true;
    console.log('Completing task: ' + this._name);
};

Task.prototype.save = function() {
    console.log('Saving task: ' + this._name);
};

let task1 = new Task('task1');
task1.complete();
task1.save();

let UrgentTask = function(name, priority, notificationRecepients) {
    Task.call(this, name); //same as super in ES6 class
    this._priority = priority;
    this._notificationRecepients = notificationRecepients;
};

//UrgentTask.prototype = Task.prototype;
//this pollutes even task.prototype, functions added to urgent task prototype
//will also be added to task.prototype
UrgentTask.prototype = Object.create(Task.prototype);
let task2 = new UrgentTask('task2', 1, ['Uday', 'Kiran']);
/*
console.log(UrgentTask.prototype);
console.log(Task.prototype);
Task { complete: [Function], save: [Function] }
Task { complete: [Function], save: [Function] }
*/
UrgentTask.prototype.notify = function(arr) {
    arr.forEach((elem) => {
        console.log('Notifying people ' + elem);
    });
};
/*
console.log(UrgentTask.prototype);
console.log(Task.prototype);
Task { complete: [Function], save: [Function], notify: [Function] }
Task { complete: [Function], save: [Function], notify: [Function] }
*/
UrgentTask.prototype.save = function() {
    this.notify(this._notificationRecepients);
    Task.prototype.save.call(this);
};

task2.complete();
task2.save();

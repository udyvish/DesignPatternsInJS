const Task = require('./Task');

//Decorator using inheritance in ES6
class UrgentTask extends Task {
    constructor(name, priority, notification) {
        super(name);
        this._priority = priority;
        this._notification = notification;
    }
    notify(arr) {
        arr.forEach((elem) => {
            console.log('Notifying people ' + elem);
        });
    }
    save() {
        this.notify(this._notification);
        Task.prototype.save.call(this);
    }
}

let task1 = new Task('Task1');
task1.complete();
task1.save();
let task2 = new UrgentTask('Urgent task', 1, ['Uday', 'Kiran']);
task2.complete();
task2.save();

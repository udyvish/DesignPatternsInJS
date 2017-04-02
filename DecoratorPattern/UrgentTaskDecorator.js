const Task = require('./Task');

let normalTask = new Task('normal');
let urgentTask = new Task('urgent');
normalTask.complete();
normalTask.save();
urgentTask._priority = 1;
urgentTask.notify = function(people) {
    people.forEach((elem) => {
        console.log(`notified ${elem}`);
    });
}

urgentTask.save = function() {
    //Decorating urgent task's save with new save function that notifies all
    //important people 😜 before completing and saving task
    urgentTask.notify(['Uday', 'Kiran', 'John', 'Danny']);
    urgentTask.complete();
    Task.prototype.save.call(this);
}
urgentTask.save();

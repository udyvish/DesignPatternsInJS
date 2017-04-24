const Task = require('./Task');
const TaskService = require('./TaskService');
const TaskServiceWrapper = require('./TaskServiceWrapper');

let task1 = new Task({
    name: 'task1',
    priority: 1,
    users: [
        'Udy', 'Kiran'
    ],
    project: 'S360',
    isComplete: false,
    completedDate: null
});

//these are the series of tasks to be performed to complete a task
TaskService.completeTask(task1);
TaskService.completedDate(task1);
TaskService.notifyUsers(task1);
//Provide a unified interface to a set of interfaces in a subsystem.
//Façade defines a higher-level interface that makes the subsystem easier to use.
//TaskServiceWrapper is a simplified interface for completing task
let task2 = new Task({
    name: 'task2',
    priority: 1,
    users: [
        'Solomon', 'Hykes'
    ],
    project: 'Docker',
    isComplete: false,
    completedDate: null
});

TaskServiceWrapper.completeTask(task2);

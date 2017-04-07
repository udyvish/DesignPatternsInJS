const TaskService = require('./TaskService');

class TaskServiceWrapper {
    completeTask(task) {
        TaskService.completeTask(task);
        TaskService.completedDate(task);
        TaskService.notifyUsers(task);
    }
}

module.exports = new TaskServiceWrapper();

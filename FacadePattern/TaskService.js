const Notification = require('./Notification');
class TaskService {
    completeTask(task) {
        task.isComplete = true;
        console.log(`Completing task ${task._name}`);
    }
    completedDate(task) {
        let date = new Date();
        task._completedDate = date;
        console.log(`Setting completed date of task ${task._name} to ${date}`);
    }
    notifyUsers(task) {
        task._users.forEach((user) => {
            Notification.notify(user);
        });
    }
};

module.exports = new TaskService();

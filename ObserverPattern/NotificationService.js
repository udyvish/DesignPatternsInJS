module.exports = class NotificationService {
    static update(task) {
        task._users.forEach((elem) => {
            console.log(`${NotificationService.prototype._msg} ${elem} for the task ${task._name}`);
        });
    }
};

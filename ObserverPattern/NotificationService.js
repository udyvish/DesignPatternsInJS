module.exports = class NotificationService {
    constructor() {
        this._msg = 'Notifying users';
    }
    update(task) {
        task._users.forEach((elem) => {
            console.log(`${this._msg} ${elem} for the task ${tas._name}`);
        });
    }
};

module.exports = class LoggingService {
    static update(task) {
        console.log(`${LoggingService.prototype._msg} ${task._name}`);
    }
};

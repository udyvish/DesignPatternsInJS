module.exports = class AuditingService {
    static update(task) {
        console.log(`${AuditingService.prototype._msg} ${task._name}`);
    }
};

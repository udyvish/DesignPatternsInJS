const task = require('../Observer Pattern/Task'),
    notService = require('../Observer Pattern/NotificationService'),
    logService = require('../Observer Pattern/LoggingService'),
    auditService = require('../Observer Pattern/AuditingService'),
    mediator = require('./mediator');

let task1 = new task({
    _name: 'Coding',
    _project: 'R15',
    _users: ['Uday', 'Kiran']
});

notService.prototype._msg = 'Notifying';
logService.prototype._msg = 'Logging';
auditService.prototype._msg = 'Auditing';

mediator.subscribe('complete', notService.update, notService);
mediator.subscribe('complete', logService.update, logService);
mediator.subscribe('complete', auditService.update, auditService);

task1.save = () => {
    task.prototype.save.call(task1);
    mediator.publish('complete',task1);
}

task1.save();
const ObservableTask = require('./ObservableTask');
const LoggingService = require('./LoggingService');
const NotificationService = require('./NotificationService');
const AuditingService = require('./AuditingService');

let task1 = new ObservableTask({
    _name: 'Uday',
    _project: 'MSOS',
    _users: [
        'Uday', 'Ryan'
    ],
    _priority: 2
});

LoggingService.prototype._msg = 'Logging task';
AuditingService.prototype._msg = 'Auditing task';
NotificationService.prototype._msg = 'Notifying';

task1.addObserver(LoggingService.update);
task1.addObserver(NotificationService.update);
task1.addObserver(AuditingService.update);
task1.save();
console.log('*'.repeat(50));
task1.removeObserver(LoggingService.update);
task1.save();

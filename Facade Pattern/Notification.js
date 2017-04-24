class NotificationService {
    notify(name) {
        console.log(`Notifying user ${name}`);
    }
}

module.exports = new NotificationService();

class DBLogger {
    constructor() {}

    LogInfo(msg) {
        console.info('Info logged into DB ' + msg);
    }

    LogWarning(msg) {
        console.warn('Warn logged into DB ' + msg);
    }

    LogError(msg) {
        console.error('Error logged into DB ' + msg);
    }

    LogDebug(msg) {
        console.debug('Debug logged into DB ' + msg);
    }
}

module.exports = () => {
    return new DBLogger();
}

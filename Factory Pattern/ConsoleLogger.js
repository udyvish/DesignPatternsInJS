class ConsoleLogger {
    constructor() {}

    LogInfo(msg) {
        console.info('Info logged into console ' + msg);
    }

    LogWarning(msg) {
        console.warn('Warn logged into console ' + msg);
    }

    LogError(msg) {
        console.error('Error logged into console ' + msg);
    }

    LogDebug(msg) {
        console.debug('Debug logged into console ' + msg);
    }
}

module.exports = () => {
    return new ConsoleLogger();
}

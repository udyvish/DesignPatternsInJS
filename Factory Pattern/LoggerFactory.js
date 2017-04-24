class LoggerFactory {
    getLogger(loggerType, logFilePath) {
        let modulePath = './' + loggerType;
        return require(modulePath)(logFilePath);
    }
}

module.exports = new LoggerFactory();

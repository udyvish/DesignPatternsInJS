const factory = require('./LoggerFactory');

const logger = factory.getLogger('FileLogger', '/Users/Uday/app.log');
console.log(logger);
logger.LogError('Some error has happened');

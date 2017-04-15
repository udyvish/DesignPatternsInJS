module.exports = class LoggingService {
    constructor() {
        this._msg = 'Logging task';
    }
    update(task) {
        console.log(`${this._msg} ${tas._name}`);
    }
};

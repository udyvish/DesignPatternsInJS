const fs = require('fs');
class FileLogger {
    constructor(file) {
        this._file = file;
    }

    fileExists(file) {
        return fs.existsSync(file);
    }

    LogInfo(msg) {
        let logMsg = 'Info: ' + msg;
        fs.appendFile(this._file, logMsg, (err) => {
            if (error) {
                console.error(error);
            }
        });
    }

    LogWarning(msg) {
        let logMsg = 'Warning: ' + msg;
        fs.appendFile(this._file, logMsg, (err) => {
            if (error) {
                console.error(error);
            }
        });
    }

    LogError(msg) {
        let logMsg = 'Error: ' + msg + '\r\n';
        fs.appendFile(this._file, logMsg, (err) => {
            if (err) {
                console.error(err);
            }
        });
    }

    LogDebug(msg) {
        let logMsg = 'Debug: ' + msg;
        fs.appendFile(this._file, logMsg, (err) => {
            if (err) {
                console.error(err);
            }
        });
    }
}

module.exports = (file) => {
    return new FileLogger(file);
}

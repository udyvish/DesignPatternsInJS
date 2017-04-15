const Task = require('./Task');
const ObserverList = require('./ObserverList');

class ObservableTask extends Task {
    constructor(task) {
        super(task);
        this._observers = new ObserverList();
    }
    addObserver(observer) {
        this._observers.add(observer);
    }
    notify(task) {
        for (var i = 0; i < this._observers.count(); i++) {
            let func = this._observers.get(i)(task);
        }
    }
    save() {
        super.save(this);
        this.notify(this);
    }
}

module.exports = ObservableTask;

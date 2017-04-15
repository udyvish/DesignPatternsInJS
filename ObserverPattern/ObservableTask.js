const Task = require('./Task');
const ObserverList = require('./ObserverList');

class ObservableTask extends Task {
    constructor(task) {
        super(task);
        this._observers = new ObserverList();
    }
    addObserver(observer) {
        this._observers.add(observer);
        return this;
    }
    removeObserver(observer) {
        let index = this.indexOf(observer);
        if (index >= 0)
            this._observers.remove(index);
        return this;
    }
    indexOf(observer) {
        if (this._observers.count() == 0)
            return -1;
        else {
            for (var i = 0; i < this._observers.count(); i++) {
                if (this._observers.get(i) === observer) {
                    return i;
                }
            }
        }
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

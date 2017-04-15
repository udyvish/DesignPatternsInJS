module.exports = class ObserverList {
    constructor() {
        this._observers = new Array();
    }
    add(obj) {
        return this._observers.push(obj);
    }
    get(index) {
        if (index > -1 && index < this._observers.length) {
            return this._observers[index];
        }
    }
    count() {
        return this._observers.length;
    }
};

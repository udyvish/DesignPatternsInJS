module.exports = class ObserverList {
    constructor() {
        this._observers = new Array();
    }
    add(obj) {
        this._observers.push(obj);
        return this;
    }
    remove(index) {
        this._observers.splice(index, 1);
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

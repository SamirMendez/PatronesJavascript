class Logs {
    constructor() {
        this._data = [];
        this.currentPointer = 0;
    }
    fetchData() {
        this._data = [1, 2, 3];
    }
    next() {
        let current = this._data[this.currentPointer];
        this.currentPointer++;
        return current;
    }
    hasNext() {
        return this._data[this.currentPointer];
    }
}
module.exports = Logs;
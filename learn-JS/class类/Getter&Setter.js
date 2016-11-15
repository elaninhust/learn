const Counter = {
    _count: 0,
    get value() {
        console.log(this._count);
        return ++this._count;
    },
    set new(value) {
        console.log(this._count, value);
        this._count = this._count + value;
    }
}

// console.log(Counter.value);
// console.log(Counter.value);
console.log(Counter.new = 4);
console.log(Counter.value);

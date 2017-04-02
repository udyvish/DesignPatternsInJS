let obj = {}

obj.fname = 'uday';
obj.sname = 'kiran';
obj.getName = function() {
    return this.fname + " " + this.sname;
}

//console.log(obj.getName());

let obj2 = Object.create(Object.prototype);
obj2.fname = 'uday';
obj2.sname = 'kiran';
obj2.getName = function() {
    return this.fname + " " + this.sname;
}

//console.log(obj2.getName());

let obj3 = {
    fname: 'uday',
    sname: 'kiran'
};

Object.defineProperty(obj3, 'getName', {
    value: function value() {
        return this.fname + " " + this.sname;
    },
    writable: true,//make it false to make prop getName as read only
    enumerable: true,// false to make Object.keys not to show this prop
    configurable: true
});

console.log(obj3.getName());
/*
"uday kiran"
Array [
  "fname",
  "sname",
  "getName"
]
*/

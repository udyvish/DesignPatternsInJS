let singleton;
let somefunc = function() {
    setTimeout(() => {
        singleton = require('./SingletonDefaultCommonjs');
        console.log(singleton._timer);
    }, 1000);
};

setInterval(somefunc, 5000);

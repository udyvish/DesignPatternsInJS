class Mediator {
    constructor() {
        this.channels = {};
    }

    subscribe(channel, func, context) {
        if (!this.channels[channel]) {
            this.channels[channel] = [];
        }
        this.channels[channel].push({
            fun: func,
            context: context
        });
    };

    publish(channel) {
        let args = Array.prototype.slice.call(arguments, 1);
        if (!this.channels[channel])
            return false;
        this.channels[channel].forEach(function (element) {
            element.fun.apply(element.context, args);
        });
        return true;
    };
};

module.exports = new Mediator();
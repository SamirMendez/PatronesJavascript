let Bus = require('./bus');
class BusFactory {
    static makeBus () {
        return new Bus();
    }
}

module.exports = BusFactory
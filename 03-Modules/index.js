const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

//Initialize object

const myEmitter = new MyEmitter();

// Add listener for log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    //Emit event
    myEmitter.emit('log', 'Log event emitted!')
}, 2000);
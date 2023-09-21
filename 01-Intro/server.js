//How NodeJS differs from VanillaJS
// 1 - Node runs on a server - not in a browser (backend not frontend)
// 2 - The consile is the terminal window
// 3 - Global object instead of window object
// 4 - Has Common Core modules 
// 5 - CommonJS modules instead of ES6 modules
// 6 - Missing some JS APIs like fetch


//Import (instead of import ... from ...)
const os = require('os');
const path = require('path');
const math = require('./math');

console.log(math.add(2,3));
console.log(math.substract(2,3));
console.log(math.multiply(2,3));
console.log(math.divide(2,3))





/* console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename)) */
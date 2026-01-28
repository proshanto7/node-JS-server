const os = require('os');
const path = require('path');

// console.log(os.freemem() / (1024 * 1024 * 1024));

const filename = path.basename('/users/docs/file.txt');
console.log(filename);
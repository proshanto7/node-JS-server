const os = require('os');
const path = require('path');

// console.log(os.freemem() / (1024 * 1024 * 1024));

const filename = path.basename('/users/docs/file.txt');



// Get the file name of the current module
// console.log('File name:', __filename);

// Get the directory name of the current module


const dirname = path.dirname('/users/docs/file.txt')

console.log('Directory name:', dirname);
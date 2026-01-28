const os = require('os');
const path = require('path');

// console.log(os.freemem() / (1024 * 1024 * 1024));

const filename = path.basename('/users/docs/file.txt');



//! Get the file name of the current module
// console.log('File name:', __filename);

//! Get the directory name of the current module


// const dirname = path.dirname('/users/docs/file.txt')

// console.log('Directory name:', dirname);


//! Get the extension name of the current module
// const extname = path.extname('/users/docs/file.txt')
// console.log("extension name" , extname);




//! Handle relative paths and navigation

const pathNavi = path.join('/users', '../system', './logs', 'file.txt');


// console.log(pathNavi);

//! Parse a file path

const pathInfo = path.parse('/users/docs/file.txt');
console.log(pathInfo);
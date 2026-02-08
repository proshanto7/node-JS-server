const os = require('os');
const path = require('path');
const http = require('http');
const fs = require('fs');
const { error } = require('console');
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

// const pathInfo = path.parse('/users/docs/file.txt');
// console.log(pathInfo);




const users = [
  {
    id: 0,
    name: "proshanto sarker",
    age: 25,
    phone: "01716092653"
  },
  {
    id: 0,
    name: "partho sarker",
    age: 25,
    phone: "01875066462"
  }
]

// const server = http.createServer((req, res) => {

//   res.write(JSON.stringify(users));
//   res.end()
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });


fs.writeFile('name.txt', 'hello Proshanto!', (error) => {


  if (error) {
    console.log('file', error);
  } else {
    console.log('Files created successfully');
  }

})



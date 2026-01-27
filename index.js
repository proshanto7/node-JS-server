const fs = require("fs");

// fs.writeFile("userData.txt", "hello users", (error) => { console.log(error) })

fs.readFile("userData.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

const http = require("http");

const server = http.createServer((req, res) => {

  const user = [


    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "Los Angeles" },
    { name: "Bob", age: 35, city: "Chicago" },
    { name: "Alice", age: 28, city: "San Francisco" },
  ]
  const products = [
    { name: "Laptop", price: 999.99, category: "Electronics" },
    { name: "Smartphone", price: 499.99, category: "Electronics" },
    { name: "Headphones", price: 199.99, category: "Electronics" },
    { name: "Coffee Maker", price: 79.99, category: "Home Appliances" },
  ]


  if (req.method === "GET" && req.url === "/users") {
    res.write(JSON.stringify(user));
    res.end();
  } else if (req.method === "GET" && req.url === "/products") {
    res.write(JSON.stringify(products));
    res.end();
  } else {
    res.end("Not Found");
  }

});
server.listen(8080,  () => {
  console.log("server is running http://localhost:8080");
});

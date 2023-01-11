const http = require("http");

// const server = http.createServer();

// server.on("connection", (socket) => {
//   console.log("New connection...");
// });

// server.listen(3000);
// console.log("Listning on port 3000");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/api/users") {
    res.write(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
    res.end();
  }
});

server.listen(3000);
console.log("Listning on port 3000");

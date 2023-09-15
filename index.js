const http = require("http");
const fs = require("fs");

  
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("home.html", (err, data) => {
      if (err) {
        console.log("Error on this Page.");
        res.end("Error");
      } 
      else {
        res.end(data);
      }
    });
  }
 else if (req.url == "/login") {
    fs.readFile("login.html", (err, data) => {
      if (err) {
        console.log("Error on this Page.");
        res.end("Error");
      } 
      else {
        res.end(data);
      }
    });
  }
 else if (req.url == "/signup") {
    fs.readFile("signup.html", (err, data) => {
      if (err) {
        console.log("Error on this Page.");
        res.end("Error");
      } 
      else {
        res.end(data);
      }
    });
  }
 else if (req.url == "/about") {
    fs.readFile("about.html", (err, data) => {
      if (err) {
        console.log("Error on this Page.");
        res.end("Error");
      } 
      else {
        res.end(data);
      }
    });
  }
  else if (req.url == "/blog") {
    fs.readFile("blog.html", (err, data) => {
      if (err) {
        console.log("Error on this Page.");
        res.end("Error");
      } 
      else {
        res.end(data);
      }
    });
  }
  else{
    res.end("Invalid Page")
  }
})

server.listen(8090, () => {
    console.log("Server is running..");
  });

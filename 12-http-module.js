const http = require("http");
const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.end("Welcome to our homepage");
    } else if (req.url === "/about") {
      res.end("This is about page");
    } else {
      res.end(`<h1>Oops</h1><p>we cant find page</p><a href='/'>back Home</a>`);
    }
  })
  .listen(5500);

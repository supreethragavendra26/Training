import http from "http";

const port = 4000;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type ": "text/html" });

    res.end("<h1>Home Page</h1>");
  } else if (res.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About </h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>About </h1>");
  }

  //       console.log(req.url);
  //   console.log(req.method);
  //   res.setHeader("Content-Type", "text/plan");
  //   res.end("<h1>Hello world</h1>");
});

server.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

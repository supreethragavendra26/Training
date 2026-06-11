import http from "http";

const port = 4000;
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.setHeader("Content-Type", "text/plan");
  res.end("<h1>Hello world</h1>");
});

server.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

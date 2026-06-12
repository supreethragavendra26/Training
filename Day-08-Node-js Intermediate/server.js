import http from "http";
const PORT = 4000;

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Home page </h1>");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About page </h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>page not found </h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server listing to port ->>>>>>>>>> ${PORT}`);
});

import http, { get } from "http";
const PORT = 4000;

const server = http.createServer((req, res) => {
  try {
    if (req.method === "GET") {
      if (req.url === "/") {
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
    } else {
      throw new Error("Method is not found");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("<h1>page not found </h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server listing to port ->>>>>>>>>> ${PORT}`);
});

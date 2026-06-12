import http from "http";
import fs from "node:fs/promises";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 4000;

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      let filepath;

      if (req.url === "/") {
        filepath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filepath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not Found");
      }

      const data = await fs.readFile(filepath);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } else {
      throw new Error("Method Not Allowed");
    }
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

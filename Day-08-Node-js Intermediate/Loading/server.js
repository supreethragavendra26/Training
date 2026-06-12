// Exercise 2 (5 min)

// Create user.json
// Store a name and age.
// Load the file and print the JSON data.

import http from "http";
import url from "url";
import path from "path";
import fs from "fs/promises";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 5000;

const server = http.createServer(async (req, res) => {
  let filepath;

  if (req.url === "/" || req.url == "/index") {
    filepath = path.join(__dirname, "public", "user.json");
  } else {
    res.write("<h1> error");
  }

  const data = await fs.readFile(filepath);
  res.write(data);
  res.end();
});

server.listen(PORT, () => {
  console.log("Server is running on ", { PORT });
});

// Check req.url
// If URL is /about, send:
// "About Page"
// Otherwise send:
// "Home Page"  how to do

import http from "http";

const PORT = 9000;

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.write("About page");
  } else {
    res.write("Home page ");
  }
  res.statusCode = 401;

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port-> ${PORT}`);
});

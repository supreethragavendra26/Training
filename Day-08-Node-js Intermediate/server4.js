import { createServer } from "http";

const PORT = 4000;

const users = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

//Logger  middleware

const Logger = (req, res, next) => {
  console.log(`${req.method}  ${req.url} `);
  next();
};

const server = createServer((req, res) => {
  // GET ALL USERS

  Logger(req, res, () => {
    if (req.url === "/api/users" && req.method === "GET") {
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(users));
    }

    // GET SINGLE USER
    if (/^\/api\/users\/\d+$/.test(req.url) && req.method === "GET") {
      const id = req.url.split("/")[3];

      const user = users.find((user) => user.id === Number(id));

      res.setHeader("Content-Type", "application/json");

      if (user) {
        return res.end(JSON.stringify(user));
      }

      res.statusCode = 404;
      return res.end(JSON.stringify({ message: "User not found" }));
    }

    // ROUTE NOT FOUND
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Route not found" }));
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

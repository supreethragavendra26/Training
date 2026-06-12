import { createServer } from "http";

const PORT = 4000;

const users = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

//Logger  middleware

const Logger = (req, res, next) => {
  console.log(`Request Received`);
  next();
};

// Json  middleware

const jsonmiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// route handler for /api

const getusersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Route handller for user by id

const getuserhandlerbyID = (req, res) => {
  const id = req.url.split("/")[3];

  const user = users.find((user) => user.id === Number(id));

  if (user) {
    return res.end(JSON.stringify(user));
  }

  res.statusCode = 404;
  return res.end(JSON.stringify({ message: "User not found" }));
};

// not found handler

const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "Route not found" }));
};

const createserverHandler = (req, res) => {
  let body = "";
  res.on("data", (chunk) => {
    body = body + chunk.toString();
  });
};
const server = createServer((req, res) => {
  // GET ALL USERS

  Logger(req, res, () => {
    jsonmiddleware(req, res, () => {
      if (req.url === "api/users" && req.method === "GET") {
        getusersHandler(req, res);
      } else if (/^\/api\/users\/\d+$/.test(req.url) && req.method === "GET") {
        getuserhandlerbyID(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

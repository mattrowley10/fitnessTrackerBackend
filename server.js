const express = require("express");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();
const PORT = 3000;
const cors = require("cors");
const server = express();
const cookieParser = require("cookie-parser");

const client = require("./db/client");
client.connect();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());
server.use(cookieParser(process.env.COOKIE_SECRET));
server.use("/api", require("./routes"));
server.use(express.static(path.join(__dirname, "./client", "dist")));

server.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "./client/dist", "index.html"));
});

server.use((err, req, res, next) => {
  res.send({
    success: false,
    message: err.message,
    name: err.name,
    stack: err.stack,
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

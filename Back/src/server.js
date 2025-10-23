const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const upload = require("./routes/upload")
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use("/upload", upload)

server.use(router);

module.exports = server;

const server = require("../server");
const { createServer } = require("http");

module.exports = (req, res) => {
  return server(req, res);
};


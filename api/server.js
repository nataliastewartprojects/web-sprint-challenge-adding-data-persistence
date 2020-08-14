const express = require("express");

const server = express();

server.use(express.json()); ///<<<< need to be on top - don't forget

module.exports = server;

const express = require("express");

const projectRouter = require("../routers/project-router");
const resourceRouter = require("../routers/resource-router");
const taskRouter = require("../routers/task-router");
const server = express();

server.use(express.json()); ///<<<< need to be on top - don't forget

server.use("/api/projects", projectRouter);
server.use("/api/resource", resourceRouter);
server.use("/api/task", taskRouter);

module.exports = server;

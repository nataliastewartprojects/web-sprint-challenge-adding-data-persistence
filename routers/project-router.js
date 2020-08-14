const express = require("express");

const projectDB = require("../models/project-model");

const router = express.Router();

module.exports = router;

//--ENDPOINTS ---------------------

//--GET/ projects
router.get("/", (req, res) => {
  projectDB
    .find()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Failed to retrieve projects" });
    });
});

//----------GET project BY ID-----//
router.get("/:id", (req, res) => {
  const { id } = req.params;

  projectDB
    .findById(id)
    .where({ id })
    .first()
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to find the project" });
    });
});

//--POST/ADD/project
router.post("/", (req, res) => {
  const newProject = req.body;
  projectDB
    .add(newProject)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((error) => {
      console.log("POST/project error:", error);
      res.status(500).json({ message: error.message });
    });
});

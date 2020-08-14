const express = require("express");

const resourceDB = require("../models/resource-model");

const router = express.Router();

//---endpoints

//-----------GET resources---------
router.get("/", (req, res) => {
  resourceDB
    .find()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(200)
        .status(500)
        .json({ message: "Failed to retrieve resources" });
    });
});

//----------GET resource BY ID-----//
router.get("/:id", (req, res) => {
  const { id } = req.params;

  resourceDB
    .findById(id)
    .where({ id })
    .first()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to retrieve resource" });
    });
});

//---------POST / INSERT resource---/
router.post("/", (req, res) => {
  const newResource = req.body;
  resourceDB
    .add(newResource)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((error) => {
      console.log("POST/INSERT/ error:", error);
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;

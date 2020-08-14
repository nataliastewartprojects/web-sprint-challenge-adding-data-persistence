const express = require("express");

const taskDB = require("../models/task-model");

const router = express.Router();

//-------endpoints start here--------/

//-----------GET task---------
router.get("/", (req, res) => {
  taskDB
    .find()
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve task" });
    });
});

//----------GET task BY ID-----//
router.get("/:id", (req, res) => {
  const { id } = req.params;

  taskDB
    .findById(id)
    .where({ id })
    .first()
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve task" });
    });
});

//---------POST / INSERT task---/
router.post("/", (req, res) => {
  const addedTask = req.body;
  taskDB
    .add(addedTask)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((error) => {
      console.log("POST/INSERT/ error:", error);
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;

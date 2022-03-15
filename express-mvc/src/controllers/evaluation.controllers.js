const express = require("express");

const evaluation = require("../models/evaluation.models");

const crudController = require("./crud.controllers");

const router = express.Router();

router.get("", async (req, res) => {
    try {
      const student = await student.find()
        .populate({
          path: "evaluation_id",
          select: ["date_of_evaluation"],
        }).lean().exec();
  
      return res.status(200).send(comments);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.post("", crudController.post(evaluation));

  module.exports = router;
  
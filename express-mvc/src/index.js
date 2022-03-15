const express = require("express");

const userController = require("./controllers/user.controllers");
const evaluationController = require("./controllers/evaluation.controllers");
const studentController = require("./controllers/students.controllers");


const app = express();

app.use(express.json());

app.use("/user", userController);
app.use("/evaluation", evaluationController);
app.use("/student", studentController);


module.exports = app;

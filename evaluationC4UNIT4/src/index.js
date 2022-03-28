const express = require("express");

const app = express();

const todosController = require("./controllers/todos.controllers");
const authController = require("./controllers/auth.controllers");
const registerController = require("./controllers/register.controllers");

app.use(express.json());

app.use("/todo",todosController);
app.use("/auth",authController);
app.use("/register",registerController);

module.exports = app;
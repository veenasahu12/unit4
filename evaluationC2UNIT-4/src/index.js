const express = require("express");

const masteraccountController = require("./controllers/masteraccount.controllers");
const userController = require("./controllers/user.controllers");
const savingaccountController = require("./controllers/savingaccount.controllers");
const fixedaccountController = require("./controllers/fixedaccount.controllers");

const app = express();

app.use(express.json());

app.use("/master",masteraccountController);
app.use("/user",userController);
app.use("/saving",savingaccountController);
app.use("/fixed",fixedaccountController);

module.exports = app;
const express = require("express");

const Fixed = require("../models/fixedaccount.models");

const crudcontroller = require("./crud.controllers");

const router = express.Router();

router.post("",crudcontroller.post(Fixed));

module.exports = router;
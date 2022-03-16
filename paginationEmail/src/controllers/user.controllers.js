const path = require("path");

const express = require("express");

const transporter = require("../configs/mail");

const user = require("../models/user.models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const pagesize = req.query.pagesize || 3; // 30


    const skip = (page - 1) * pagesize; // 1 - 1 = 0 0 * anything  = 0
    // page = 2 then 2 - 1 = 1 and 1 * pagesize = 30

    const user = await user.find()
      .skip(skip) // 30
      .limit(pagesize) // 31 - 60
      .lean()
      .exec();

    const totalPages = Math.ceil(
      (await user.find().countDocuments()) / pagesize
    );

    return res.status(200).send({ user, totalPages });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await user.create(req.body);

    transporter.sendMail({
      from: '"Amazon admin" <admin@amazon.com>', // sender address
      to: product.sellerEmail, // list of receivers
      subject: "Your user is successfully created", // Subject line
      text: "Hello sir/madam your user is successfully created", // plain text body
      
      alternatives: [
        {
          contentType: "text/html",
          path: path.join(__dirname, "../mailers/user-created.mail.html"),
        },
        {
          filename: "user.txt",
          path: path.join(__dirname, "../mailers/user-details.txt"),
        },
      ],
    });

    return res.status(201).send({ message: "user created successfully" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;

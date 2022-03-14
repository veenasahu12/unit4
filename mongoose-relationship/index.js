const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://veena:veena@cluster0.uhzo2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};

// USER SCHEMA
// Step 1 :- creating the schema
const userSchema = new mongoose.Schema(
    {
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
    },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
    }
  );
  
// Step 2 : creating the model
const User = mongoose.model("user", userSchema); 

// AUTHOR SCHEMA
// Step 1 :- creating the schema
const authorSchema = new mongoose.Schema(
    {
        authorname: {type: String, required: true},
    },
    {
        versionKey:false,
        timestamps: true,
    }
);

// step 2 : creating the model
const Author = mongoose.model("author", authorSchema);

// SECTION SCHEMA
// step 1 :- creating the schema
const sectionSchema = new mongoose.Schema(
    {
        bookname: {type: String, required: true},
    },
    {
        versionKey:false,
        timestamps: true,
    }
);

// step 2 : creating the model
const Section = mongoose.model("section", sectionSchema);


// book CRUD
app.get("/user", async (req, res) => {
    try {
      const user = await User.find().lean().exec();
  
      return res.status(200).send({ user: user }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });
  
  app.post("/user", async (req, res) => {
    try {
      const user = await User.create(req.body);
  
      return res.status(201).send(user);
    } catch (err) {
      return res.status(501).send({ message: err.message });
    }
  });
  
  app.get("/user/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id).lean().exec();
      // db.users.findOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.patch("/user/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.delete("/user/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id).lean().exec();
      // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  
// SECTION CRUD
app.get("/section", async (req, res) => {
    try {
      const section = await Section.find().lean().exec();
  
      return res.status(200).send({ section: section }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
});
app.post("/section", async (req, res)=>{
    try{
        const section = await Section.create(req.body);

        return res.status(201).send(section);
     } catch (err) {
     return res.status(501).send({ message: err.message });
  }
});
app.get("/section/:id", async (req, res) => {
    try {
      const section = await Section.findById(req.params.id).lean().exec();
  
      return res.status(200).send(section);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.patch("/section/:id", async (req, res) => {
    try {
      const section = await Section.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(section);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.delete("/section/:id", async (req, res) => {
    try {
      const section = await Section.findByIdAndDelete(req.params.id).lean().exec();
      // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(author);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

// AUTHOR CRUD
app.get("/author", async (req, res) => {
    try {
      const author = await Author.find().lean().exec();
  
      return res.status(200).send({ author: author }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
});
app.post("/author", async (req, res)=>{
    try{
        const author = await Author.create(req.body);

        return res.status(201).send(author);
     } catch (err) {
     return res.status(501).send({ message: err.message });
  }
});
app.get("/author/:id", async (req, res) => {
    try {
      const author = await Author.findById(req.params.id).lean().exec();
      // db.users.findOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(author);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.patch("/author/:id", async (req, res) => {
    try {
      const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(author);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.delete("/author/:id", async (req, res) => {
    try {
      const author = await Author.findByIdAndDelete(req.params.id).lean().exec();
      // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(author);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
app.listen(5005, async () => {
    try {
      await connect();
    } catch (err) {
      console.log(err);
    }
    console.log("listening on port 5005");
  });
  
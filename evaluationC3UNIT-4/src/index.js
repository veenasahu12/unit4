const express = require("express");

const connect = require("./configs/db");

const usercontroller = require("./controllers/user.controllers")
const bookcontroller = require("./controllers/book.controllers")
const commentcontroller = require("./controllers/comment.controllers")


const app = express();

app.use(express.json());

app.use("/users",usercontroller);
app.use("/book",bookcontroller);
app.use("/comment",commentcontroller)

app.listen(5000,async () => {
    try{
        await connect()

        console.log("listening to 5000");
    }catch(err){
        console.log(err);
    }
})
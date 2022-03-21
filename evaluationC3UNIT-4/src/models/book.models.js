const mongoose = require ("mongoose");

const bookSchema = new mongoose.Schema({
    like: {type: Number, required: true, default: 0},
    coverimage:  {type:String, required: false},
    content:  {type: Number, required: true},
},
{
    versionKey : false,
    timestamps : true,
}
);

module.exports = mongoose.model("book",bookSchema)
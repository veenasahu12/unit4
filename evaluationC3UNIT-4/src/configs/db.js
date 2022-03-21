const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect('mongodb+srv://veena12:veena1248@cluster0.ewxtl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
}

module.exports = connect;
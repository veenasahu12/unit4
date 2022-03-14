const app = require("./index");

const connect = require("./configs/db");

app.listen(4002, async () =>{
    try{
        await connect();
    }catch(err){
        console.log("listening on port 4002");
    }
})
const mongoose = require("mongoose");
const uri = "mongodb+srv://backend:backendpassword@backendexam.newrsgd.mongodb.net/?retryWrites=true&w=majority";

const connect = async function(){
    try{
        await mongoose.connect(uri);
        console.log("connected");
    }catch(err){
        console.log(err);
    }
}

module.exports= connect;

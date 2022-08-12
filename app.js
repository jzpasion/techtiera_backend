var express = require('express');
var app = express();
const mongoose = require("mongoose");
const uri = "mongodb+srv://backend:backendpassword@backendexam.newrsgd.mongodb.net/?retryWrites=true&w=majority";

async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("connected");
    }catch(err){
        console.log(err);
    }
}

connect();

const registerRoute = require('./api/route/registerRoute');
const loginRoute = require('./api/route/loginRoute');
const { login } = require('./api/handler/loginHandler');

app.use(function(req, res , next){
    res.setHeader("Access-Control-Allow-Origin" , "*");
    res.setHeader("Access-Control-Allow-Methods" , "POST ,PUT ,GET ,DELETE");
    res.setHeader("Access-Control-Allow-Headers","X-Requested-with-content-type");
    res.setHeader("Access-Control-Allow-Credentials" , true);

    next();
});

app.use(express.json());
app.use('/api/registration',registerRoute);
app.use('/api/loginAuth', loginRoute);

module.exports = app;
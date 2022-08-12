var express = require('express');
var app = express();

const registerRoute = require('./api/route/registerRoute');
const loginRoute = require('./api/route/loginRoute');
const verifyRoute = require('./api/route/verifyRoute');

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
app.use('/api/auth' , verifyRoute);

module.exports = app;
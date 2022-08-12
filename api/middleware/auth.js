const jwt = require('jsonwebtoken');

const jwt_secret = 'asd!nua$#@sdfaasdow232ejowief@jawoppqkwpoqp@#!@wkoep#@!@~';

const verifyToken = (req, res,next)=>{
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if(!token){
        return res.status(403).send("A token is required for authentication");
    }
    try{
        const decode = jwt.verify(token , jwt_secret);
        req.user = decode;
    }catch(err){
        return res.status(401).json({error: "Invalid Token"});
    }
    return next();
};

module.exports = verifyToken;
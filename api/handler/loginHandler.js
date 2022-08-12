const userRegister = require('../models/register');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwt_secret = 'asd!nua$#@sdfaasdow232ejowief@jawoppqkwpoqp@#!@wkoep#@!@~';

const login = async (req ,res ) =>{
    const {email , password} = req.body;

    const user = await userRegister.findOne({email}).lean()

    if(!user){
        return res.status(500).json({status: "error", message:"Invalid Username/Password!"});
    }

    if(await bcrypt.compare(password, user.password)){

        const token = jwt.sign({id: user._id ,email: user.email },jwt_secret,{
            expiresIn: "1h",
        })

        user.token = token;

        return res.status(201).json({status: "ok" , data:user})
    }
    
    return res.json({ status: 'error', error: 'Invalid username/password' })
}

module.exports = {login};
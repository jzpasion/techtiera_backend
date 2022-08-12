const userRegister = require('../models/register');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwt_secret = 'asd!nua$#@sdfaasdow232ejowief@jawoppqkwpoqp@#!@wkoep#@!@~';

const register = async (req ,res) =>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    try{

    
        if( firstname && lastname && email && password){

            const userCheck = await userRegister.findOne({email}).lean()

            if(userCheck){
                return res.status(409).json({ status: 'error', error: 'email already in use!' });
            }

            if(password.length < 5){
                return res.status(500).json({
                    status: "error",
                    message: "Password should be atleast 6 characters!"})
            }

          var bcrpytPassword = await bcrypt.hash(password , 10);

          const newUser = await userRegister.create({
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: bcrpytPassword,
          });

          const token = jwt.sign(
            { user_id: newUser._id, email },
            jwt_secret,
            {
              expiresIn: "1h",
            }
          );

          newUser.token = token;

          res.status(201).json({status: "ok" , message:"User added successfully!" , data:newUser});

        }else{
            return res.status(400).json({
                status: "error",
                message: "Invalid Parameters!"});
        }
    }catch(error){
        res.status(409).json({status: "error" , error:error});
    }
}

module.exports = {
    register
}
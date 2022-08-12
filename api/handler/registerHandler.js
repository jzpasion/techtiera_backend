const userRegister = require('../models/register');
const bcrypt = require('bcryptjs');

const register = (req ,res) =>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;


    if( firstname && lastname && email && password){
        if(password.length < 5){
            return res.status(500).json({
                status: "error",
                message: "Password should be atleast 6 characters!"})
        }

        bcrypt.hash(password , 10, function(err, pass){
            if(err){
                return res.status(500).json({error:err})
            }
            console.log(pass);
            let newUser = new userRegister({
                firstName: firstname,
                lastName : lastname,
                password: pass,
                email : email
            })

            newUser.save()
            .then(newUser =>{
                return res.status(200).json({message: "User Added Successfully!"});
            })
            .catch(err =>{
                if (err.code === 11000) {
                    // duplicate key
                    return res.json({ status: 'error', error: 'email already in use!' });
                }
                throw err
            })

        })

    }else{
        return res.status(500).json({
            status: "error",
            message: "Invalid Parameters!"});
    }


}

module.exports = {
    register
}
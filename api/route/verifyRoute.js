const verify = require('../middleware/auth');
var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({extended:false}));

router.post("/verify" , verify, (req, res)=>{
    res.status(200).send({message:"Token Authenticated!"});
})

module.exports = router;
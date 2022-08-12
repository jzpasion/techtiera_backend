var loginHandler = require('../handler/loginHandler');
var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({extended:false}));

router.post('/login' , loginHandler.login);

module.exports = router;
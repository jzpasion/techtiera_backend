var registerHandler = require('../handler/registerHandler');
var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({extended: false}))

router.post('/register' , registerHandler.register);

module.exports = router;
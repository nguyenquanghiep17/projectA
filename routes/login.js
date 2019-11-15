var express = require('express');
var login_controller = require('../controllers/login.controler.js');
var index = require('./index.js');
var router = express.Router();


/* GET users listing. */
router.get('/', login_controller.login);

router.post('/', function(req, res, next) {
  console.log(req.body.name, req.body.pass);
})

module.exports = router;

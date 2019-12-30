var express = require('express');
var passport = require('passport');
var login_controller = require('../controllers/login.controller.js');


var router = express.Router();


/* GET users listing. */
router.get('/', login_controller.get_login);

router.post('/', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));



module.exports = router;

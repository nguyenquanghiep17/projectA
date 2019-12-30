var express = require('express');
var router = express.Router();

var passport_config = require('../configs/passport.config');
var index_controller = require('../controllers/index.controller');

/* GET home page. */
router.get('/', index_controller.get_index);

router.get('/dang-xuat', index_controller.get_logout);

router.post('/dang-kys', index_controller.post_dangky);

passport_config.serializeUser;
passport_config.deserializeUser;

passport_config.login;

module.exports = router;

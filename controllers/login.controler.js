var users = require('../configs/database.config.js');

module.exports.login = function(req, res, next) {
  res.render('../views/login.pug');
};
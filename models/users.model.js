var mongoose = require('mongoose');

//Định nghĩa một schema
var Schema = mongoose.Schema;

var users = new Schema({
    username: String,
    password: String
});

var user = mongoose.model('user', 'users');

module.exports = user;
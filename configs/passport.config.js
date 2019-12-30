
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var UserSchema = require('../models/users.model');




module.exports.serializeUser =  passport.serializeUser(function(user, done) {
    done(null, user.id);
});

module.exports.deserializeUser = passport.deserializeUser(function(id, done) {
    UserSchema.findById(id, function(err, user) {
        done(err, user);
    });
});


module.exports.login = passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, username, password, done) {
    UserSchema.findOne({
        'username': username
    }, function(err, user) {

        if (err) {
            return done(err);
        }

        if (!user) {
            return done(null, false, {
                message: 'Tài khoản này không tồn tại, vui lòng kiểm tra lại.'
            });
        } else if (!user.validPassword(password)){
            return done(null, false, {
                message: 'Mật khẩu không chính xác, vui lòng kiểm tra lại.'
            });
        } else if (user.validPassword(password)){

            return done(null, user);
        }



            
    });
}));


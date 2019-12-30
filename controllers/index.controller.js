
var subjectSchema = require('../models/subjects.model');
var UserSchema = require('../models/users.model');
module.exports.get_index = async function(req, res, next) {
    if (!req.isAuthenticated()) {
        res.redirect('/login');
    } else {
        if (req.user.roles == "admin") {
            res.redirect('/quan-tri');
            //res.render('admin.pug', {user: req.user});
        } else {
            var subject = await subjectSchema.find();
            res.render('index.pug', {user: req.user, subjectSchema: subject});
        }
        
    }
   
}


module.exports.get_logout = function(req, res, next) {
    if (req.isAuthenticated()) {
        req.logout();
        res.redirect('/');
    }

}


module.exports.post_dangky = async function(req, res, next) {
    if (req.isAuthenticated()) {

        var list = req.body.subjecs;
        var subjects = await subjectSchema.find();
        for (i = 0; i < list.length; i++) {
            subjects.findOne({
                'username': list[i]
            }, function(err, subject) {
                if (subject.room < 50) {
                    UserSchema.findOne({
                        'username': req.user.username
                    }, function(err, user) {
                        user.subjecs.pull(subject);
                    });
                }
        
        
                    
            });
        }
    }

}
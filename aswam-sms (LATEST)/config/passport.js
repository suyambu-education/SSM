var passport = require("passport");
var User = require("../Models/User.js");
var localStratagy = require("passport-local").Strategy;


passport.serializeUser(function(user, done){

    done(null, user.id);
});

passport.deserializeUser(function(id, done){

    User.findById(id, function(err, user){
        done(err, done);
    });
});

passport.use('local.signup', new localStratagy({

        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    }, function(req, email, password, done){

        req.checkBody('email')
            .notEmpty().withMessage("Email in requied")
            .isEmail().withMessage("Please enter valid email id");
        req.checkBody('password')
            .notEmpty().withMessage("plase enter passsword")
            .isLength({min:6}).withMessage("password minimum length is 6");
        var errors = req.validationErrors();

        if(errors){
            var messages = [];
            errors.forEach(function(error){
                messages.push(error.msg);
            });
            return done(null, false, req.flash('error', messages));
        }
        
        User.findOne({'email': email}, function(err, user){

            if(err){
                return done(err);
            }
            if(user){
                return done(null, false, {message: 'Email is already in use'});
            }
            var newUser = new User();
            newUser.email = email;
            newUser.password = newUser.encryptPassword(password);
            newUser.save(function(err, result){

                if(err){
                    return done(err);
                }
                return done(null, newUser);
            });

        });
    }
));


passport.use('local.signin', new localStratagy({

        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    }, function(req, email, password, done){

        req.checkBody('email')
            .notEmpty().withMessage("Email in requied")
            .isEmail().withMessage("Please enter valid email id");
        req.checkBody('password')
            .notEmpty().withMessage("plase enter passsword");
        var errors = req.validationErrors();

        if(errors){
            var messages = [];
            errors.forEach(function(error){
                messages.push(error.msg);
            });
            return done(null, false, req.flash('error', messages));
        }

        User.findOne({'email': email}, function(err, user){
            if(err){
                return done(err);
            }
            if(!user){
                return done(null, false, {message: 'No user found !!!'});
            }
            if(!user.validPassword(password)){
                return done(null, false, {message: 'Wrong password !!!'});
            }
            return done(null, user);
        });
    }
));
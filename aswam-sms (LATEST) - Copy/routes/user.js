var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true })
var passport = require('passport');

router.use(csrfProtection);

var user = require("../Controllers/UsersController.js");


// Profile Page
router.get('/profile', isLoggedIn, function(req, res) {
    user.profile(req, res);
});

// Admin Dashboard Page
router.get('/admin-dashboard', isLoggedIn, function(req, res) {
    user.admin_dashboard(req, res);
});

router.get('/admin/students',isLoggedIn,function(req,res){
    // user.admin_dashboard(req,res);
});

//Logout method
router.get('/logout', isLoggedIn, function(req, res, next) {
    req.logout();
    res.redirect("/");
});


router.use('/', notisLoggedIn, function(req, res, next){
    next();
});

// signup Get Method
router.get('/signup', function(req, res, next) {
    user.signup(req, res);
});

// signup Post Method
router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: 'users/profile',
    failureRedirect: 'signup',
    failureFlash:true 
}));

// signin Get Method
router.get('/signin', function(req, res, next) {
    user.signin(req, res);
});

// signin Post Method
router.post('/signin', passport.authenticate('local.signin', {

    successRedirect: 'admin-dashboard',
    failureRedirect: 'signin',
    failureFlash:true 
}));

module.exports = router;

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/");
}

function notisLoggedIn(req, res, next){
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect("/");
}
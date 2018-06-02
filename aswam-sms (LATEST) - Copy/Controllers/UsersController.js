var mongoose = require("mongoose");
var User = require('../Models/User');

var userController = {};

// signup Get Method
userController.signup = function(req, res, next) {
    var messages = req.flash('error');
    res.render("../views/Users/signup", {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
};

// signin Get Method
userController.signin = function(req, res, next) {
    var messages = req.flash('error');
    res.render("../views/Users/signin", {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
};


userController.profile = function(req, res, next) {
    res.render("../views/Users/profile");
};

userController.admin_dashboard = function(req, res, next) {
    res.render("../views/Users/admin_dashboard");
};


module.exports = userController;

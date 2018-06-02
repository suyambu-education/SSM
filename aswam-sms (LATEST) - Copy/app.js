var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var session = require("express-session");
var passport = require("passport");
var falsh = require("connect-flash");
var validator = require("express-validator");
var MongoStore = require('connect-mongo')(session);
var moment = require('moment');

var userRouter = require('./routes/user');
var indexRouter = require('./routes/index');
var studentRouter = require('./routes/student');
var addmissionRouter = require('./routes/addstudent');
var viewStudents = require('./routes/viewStudent');
var viewParents = require('./routes/viewParents');
var ViewPrevious = require('./routes/viewprevious');
var viewAddtion = require('./routes/viewAddtional');
var editStudent = require('./routes/editStudent');
var editParents = require('./routes/edirParents');
var editPrevious = require('./routes/editPrevious');
var editAddtional = require('./routes/editaddtional');
var Settings = require('./routes/setting');
var libraryRouter =require('./routes/library');


var app = express();

mongoose.connect('mongodb://localhost:27017/school');
require("./config/passport.js");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({
    secret: 'hhkllkjh5fji4132gujrte', 
    resave: false, 
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {maxAge: 180 * 60 * 1000} 
}));
app.use(falsh());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req,res, next){
    res.locals.login = req.isAuthenticated();
    res.locals.session = req.session;
    next();
});
app.use('/users', userRouter);
app.use('/students', studentRouter);
app.use('/', indexRouter);

app.use('/addmission',addmissionRouter);
app.use('/viewStudent',viewStudents);
app.use('/ViewParents',viewParents);
app.use('/ViewPrevious_Education',ViewPrevious);
app.use('/View_addtion',viewAddtion);
app.use('/student',editStudent);
app.use('/parents',editParents);
app.use('/Previous',editPrevious);
app.use('/addtional',editAddtional);
app.use('/setting',Settings);
app.use('/library',libraryRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

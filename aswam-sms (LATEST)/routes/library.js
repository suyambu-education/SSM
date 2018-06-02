var express = require('express');
var router = express.Router();

var libraryControl = require('../Controllers/libraryController');

router.get('/', function(req, res, next) {
    libraryControl.defaultViews(req,res);
});
router.get('/view', function(req, res, next) {
    libraryControl.default(req,res);
});
router.get('/new', function(req, res, next) {
    libraryControl.AddNewBook(req,res);
});
router.post('/save', function(req, res) {
    libraryControl.save(req,res);
});
router.get('/search',function(req,res){
    libraryControl.search(req,res);
});
module.exports = router;
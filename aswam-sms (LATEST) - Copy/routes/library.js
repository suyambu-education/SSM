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
router.post('/search/fetchdata/:booknumber',function(req,res){
    libraryControl.fetch(req,res);
});
router.get('/view/book/:id',function(req,res){
    libraryControl.viewBooksList(req,res);
});
router.get('/edit/:id',function(req,res){
    libraryControl.editBooks(req,res);
});
router.post('/update/:id',function(req,res){
    
    libraryControl.updateBooks(req,res);
});
router.post('/delete/:id',function(req,res){
    
    libraryControl.delete(req,res);
});
router.get('/issuebook',function(req,res){
    libraryControl.issuebook(req,res);
});
module.exports = router;
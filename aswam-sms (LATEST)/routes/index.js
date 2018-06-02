var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 
    res.render('index', { title: 'Hi'});
});
router.get('/views',function(req,res){
    res.render('../views/viewstudent/viewMaster');
});
module.exports = router;

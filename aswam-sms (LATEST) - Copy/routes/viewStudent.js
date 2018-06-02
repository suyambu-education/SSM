var express = require('express');
var router = express.Router();
var viewStd=require('../Controllers/viewstudentController')

router.get('/',function(req,res){
    viewStd.show(req,res);
})

module.exports = router;
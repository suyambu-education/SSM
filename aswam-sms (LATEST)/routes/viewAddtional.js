var express = require('express');
var router = express.Router();
var viewAddtional=require('../Controllers/veiwaddtionaldetailsController')

router.get('/',function(req,res){
    viewAddtional.show(req,res);
})

module.exports = router;
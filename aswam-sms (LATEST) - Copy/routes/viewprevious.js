var express = require('express');
var router = express.Router();
var viewPrevious=require('../Controllers/viewpreviouseducationController')

router.get('/',function(req,res){
    viewPrevious.show(req,res);
})

module.exports = router;
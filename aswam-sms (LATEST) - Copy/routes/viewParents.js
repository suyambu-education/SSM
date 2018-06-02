var express = require('express');
var router = express.Router();
var viewParents=require('../Controllers/ViewparentsController')

router.get('/',function(req,res){
    viewParents.show(req,res);
})

module.exports = router;
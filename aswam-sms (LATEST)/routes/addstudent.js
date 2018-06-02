var express = require('express');
var router = express.Router();


var addstudent=require('../Controllers/addstudentController');
var addParents=require('../Controllers/ParentsController');
var addPreviousEdu=require('../Controllers/PreviouseducationController');
var additional=require('../Controllers/AddtionaldetailsController');
router.get('/',function(req,res){
    addstudent.create(req,res);
});
router.post('/save',function(req,res){
    addstudent.save(req,res);
});
router.get('/parents',function(req,res){
    addstudent.parents(req,res);
});

router.post('/saveP',function(req,res){
    addParents.save(req,res);
});
router.get('/infoStudent',function(req,res){
    addParents.show(req,res);
});
router.post('/savePE',function(req,res){
    // console.log(req);
    addPreviousEdu.save(req,res);
});
router.get('/additional_details',function(req,res){
    addPreviousEdu.show(req,res);
});
router.post('/saveAd',function(req,res){
    additional.save(req,res);
})
module.exports = router;
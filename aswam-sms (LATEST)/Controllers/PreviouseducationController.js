var mongoose = require("mongoose");
var PreviousEducation=require('../Models/Peviouseducation');

var PreviouseducationController = {};

PreviouseducationController.show=function(req,res){
    try {
        res.render('../views/AddStudent/addtionalDetails');
    } catch (error) {
        console.log(error);
    }
}
PreviouseducationController.save=function(req,res){
    try {
        var addPrevious = new PreviousEducation(req.body);
        addPrevious.save(function(err){
            if(err){
                console.log(err);
                res.render('../views/AddStudent/moredetails');
            }else{
                console.log("Step 3 complete");
                res.redirect("/addmission/additional_details/");
            }
        });
    } catch (error) {
        console.log(error);
    }
}



module.exports=PreviouseducationController;
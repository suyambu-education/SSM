var mongoose = require("mongoose");
var Addstudent= require('../Models/Addstudent');

var AddstudentController= {};


AddstudentController.create=function(req,res){
    try {
        
        res.render('../views/AddStudent/addStudent');
    } catch (error) {
        console.log(error);
    }
}
AddstudentController.parents=function(req,res){
    try {
        res.render('../views/AddStudent/parents');
    } catch (error) {
        console.log(error);
    }
}
AddstudentController.save=function(req,res){
    try {
        var addmission = new Addstudent(req.body);
        
        addmission.save(function(err){
            if(err){
                console.log(err);
                res.render("../views/AddStudent/addStudent");
            }else{
                console.log("Step 1 complete");
                res.redirect("/addmission/parents/");
            }
        });
    } catch (error) {
        console.log(error);
    }
}
module.exports = AddstudentController;
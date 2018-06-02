var mongoose = require("mongoose");

var viewstudent = require('../Models/Addstudent');
var viewstudentController = {};

viewstudentController.show =function(req,res){
    try {
        viewstudent.find({}).exec(function(err, result){
            if(err){
                console.log("Error:", err);
            }else{
                console.log(result);
                res.render('../views/viewstudent/showstudent',{StudentList:result});
            }
        });
    } catch (error) {
        console.log(error)
    }
}

module.exports=viewstudentController;
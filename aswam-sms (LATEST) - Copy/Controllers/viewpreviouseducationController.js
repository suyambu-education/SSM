var mongoose = require("mongoose");
var ViewPrevious =require('../Models/Peviouseducation');

var viewpreviousController = {};

viewpreviousController.show =function(req,res){
    try {
        ViewPrevious.find({}).exec(function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
                res.render('../views/viewstudent/showprevious',{Previous:result});        
             }
        });
        // res.render('../views/viewstudent/showprevious');
    } catch (error) {
        console.log(error)
    }
}

module.exports=viewpreviousController;
var mongoose = require("mongoose");
var viewParents = require("../Models/Parents");

var viewparentsController = {};

viewparentsController.show =function(req,res){
    try {
        viewParents.find({}).exec(function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
                res.render('../views/viewstudent/showparents',{Parents:result});
            }
        });
        
    } catch (error) {
        console.log(error)
    }
}

module.exports=viewparentsController;
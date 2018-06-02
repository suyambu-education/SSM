var mongoose = require("mongoose");
var viewAddtional=require('../Models/Addtionaldetails');

var viewaddtionController = {};

viewaddtionController.show =function(req,res){
    try {
        viewAddtional.find({}).exec(function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
                res.render('../views/viewstudent/showadtional',{addtional:result});       
            }
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports=viewaddtionController;
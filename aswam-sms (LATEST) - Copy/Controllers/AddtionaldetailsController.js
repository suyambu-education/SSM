var mongoose = require("mongoose");
var addtionalDetails = require('../Models/Addtionaldetails');

var AddtionaldetailsController = {};
AddtionaldetailsController.save=function(req,res){
    try {
        var addAddtions=new addtionalDetails(req.body);
        addAddtions.save(function(err){
            if(err){
                console.log(err);
                res.render('../views/AddStudent/addtionalDetails');
            }else{
                console.log("Step 4 Complete");
                res.redirect('/viewStudent');
            }
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports=AddtionaldetailsController;

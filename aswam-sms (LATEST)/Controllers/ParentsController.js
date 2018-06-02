var mongoose = require("mongoose");
var addParents = require("../Models/Parents");

var ParentsController = {};
ParentsController.show=function(req,res){
    try {
        res.render('../views/AddStudent/moredetails.ejs');
    } catch (error) {
        console.log(error);
    }
}
ParentsController.save=function(req,res){
    try {
        var addParentsS= new addParents(req.body);
        addParentsS.save(function(error){
            if(error){
                console.log("error");
                res.render('../views/AddStudent/parents');
            }else{
                console.log("Step 2 complete");
                res.redirect("/addmission/infoStudent/");
            }
        });
    } catch (error) {
        console.log(error);
    }
};
module.exports=ParentsController;
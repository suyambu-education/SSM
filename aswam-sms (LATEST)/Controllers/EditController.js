var mongoose = require("mongoose");

var Student = require('../Models/Addstudent');
var Parents =require('../Models/Parents');
var Previous = require('../Models/Peviouseducation');
var Addtional =require('../Models/Addtionaldetails');
var editController = {};
// student Edit
editController.getByIdStudent=function (req,res) {
        try {
            Student.findOne({_id: req.params.id}).exec(function(err,result){
                if(err){
                    console.log(err);
                }else{
                    console.log(result);
                    res.render('../views/viewstudent/edit/student',{Student:result});
                }
            });
        } catch (error) {
            console.log(error);
        }
}

// Parent Edit
editController.getByIdParent=function(req,res){
    try {
        Parents.findOne({_id: req.params.id}).exec(function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
                res.render('../views/viewstudent/edit/parents',{Parents:result});
            }
        });
    } catch (error) {
        console.log(error);
    }
}
// Previous Education Details Edit

editController.getByIdPrevious=function(req,res){
    try {
        Previous.findOne({_id: req.params.id}).exec(function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
                res.render('../views/viewstudent/edit/perviousedu',{PreviousEdu:result});
            }
        });
    } catch (error) {
        console.log(error);
    }
}
// edit - Adtional information
editController.getByIdAddtion=function(req,res){
    try {
        Addtional.findOne({_id: req.params.id}).exec(function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
                res.render('../views/viewstudent/edit/addtional',{AddtionalDetails:result});
            }
        });
    } catch (error) {
        console.log(error);
    }
}
// ==================================== Update ==================

// update Adtional Information
editController.UpdateByIdAddtion=function(req,res){
    try {
        Addtional.findByIdAndUpdate(req.params.id, { $set: { 
            Height:req.body.Height,
            Weight:req.body.Weight,
            Allergies:req.body.Allergies
        }},{ new: true }, function (err, result) {
            if(err){
                console.log(err);
                res.render('../views/viewstudent/edit/perviousedu',{PreviousEdu:req.body});
            }
            res.redirect("/");
        });
    } catch (error) {
        console.log(error);
    }
}
// Update Previous education
editController.UpdateByIdPrevious=function(req,res){
    try {
        Previous.findByIdAndUpdate(req.params.id, { $set: { 
            Institution_Name:req.body.Institution_Name,
            Class:req.body.Class,
            Year:req.body.Year,
            Total_marks:req.body.Total_marks
        }},{ new: true }, function (err, result) {
            if(err){
                console.log(err);
                res.render('../views/viewstudent/edit/addtional',{AddtionalDetails:req.body});
            }
            res.redirect("/");
        });
    } catch (error) {
        console.log(error);
    }
}
// update Parents
editController.UpdateByIdParents=function(req,res){
    try {
        Parents.findByIdAndUpdate(req.params.id, { $set: { 
            Admission_number : req.body.Admission_number,
            First_Name : req.body.First_Name,
            Last_Name : req.body.Last_Name,
            Relation:req.body.Relation,
            Date_of_Birth:req.body.Date_of_Birth,
            Education:req.body.Education,
            Occupation:req.body.Occupation,
            Income:req.body.Income,
            Address_Line1 : req.body.Address_Line1,
            Address_Line2 : req.body.Address_Line2,
            City:req.body.City,
            State:req.body.State,
            Country:req.body.Country,
            phone1: req.body.phone1,
            phone2:req.body.phone2,
            Mobile:req.body.Mobile,
            Email:req.body.Email,
        }},{ new: true }, function (err, result) {
            if(err){
                console.log(err);
                res.render('../views/viewstudent/edit/parents',{Parents:req.body});
            }
            res.redirect("/");
        });
    } catch (error) {
        console.log(error);
    }
}

// Update Student Information
editController.UpdateByIdStudent=function(req,res){
    try {
        Student.findByIdAndUpdate(req.params.id, { $set: { 
            Admission_number : req.body.Admission_number,
            Admission_Date:req.body.Admission_Date,
            First_Name : req.body.First_Name,
            Middle_Name : req.body.Middle_Name,
            Last_Name :req.body.Last_Name,
            Date_of_Birth:req.body.Date_of_Birth,
            Gender:req.body.Gender,
            Blood_group :req.body.Blood_group,
            Birth_Place : req.body.Birth_Place,
            Nationality:req.body.Nationality,
            Mother_Tongue : req.body.Mother_Tongue,
            Category:req.body.Category,
            Religion:req.body.Religion,
            Address_Line1 :req.body.Address_Line1,
            Address_Line2 : req.body.Address_Line2,
            City:req.body.City,
            State:req.body.State,
            PIN_code:req.body.PIN_code,
            Country:req.body.Country,
            phone: req.body.phone,
            Mobile:req.body.Mobile,
            Email:req.body.Email,
            Class:req.body.Class,
            Batch :req.body.Batch,
            Roll_number : req.body.Roll_number,
            Biometric_ID: req.body.Biometric_ID,
            Enable_email_features :req.body.Enable_email_features
        }},{ new: true }, function (err, result) {
            if(err){
                console.log(err);
                res.render('../views/viewstudent/edit/student',{Student:req.body});
            }
            res.redirect("/");
        });
    } catch (error) {
        console.log(error);
    }
}
// ================================================ DELETE =====================================

editController.deleteStudent=function(req,res){
    try {
        Student.remove({_id: req.params.id}, function(err) {
            if(err) {
              console.log(err);
            }
            else {
              console.log("Student deleted!");
              res.redirect("/views");
            }
          });
    } catch (error) {
        console.log(error);
    }
}

editController.deleteParents=function(req,res){
    try {
        Parents.remove({_id: req.params.id}, function(err) {
            if(err) {
              console.log(err);
            }
            else {
              console.log("Parents deleted!");
              res.redirect("/views");
            }
          });
    } catch (error) {
        console.log(error);
    }
}
editController.deletePrevious=function(req,res){
    try {
        Previous.remove({_id: req.params.id}, function(err) {
            if(err) {
              console.log(err);
            }
            else {
              console.log("Delete Previous!");
              res.redirect("/views");
            }
          });
    } catch (error) {
        console.log(error);
    }
}
editController.deleteAddtional=function(req,res){
    try {
        Addtional.remove({_id: req.params.id}, function(err) {
            if(err) {
              console.log(err);
            }
            else {
              console.log("Delete Adtionals!");
              res.redirect("/views");
            }
          });
    } catch (error) {
        console.log(error);
    }
}


module.exports=editController;
var mongoose = require("mongoose");

var SettingManageClassVar = require('../Models/settingManageClass');
var SettingManageBatchVar = require('../Models/settingManageBatch');

var SettingsController={};
SettingsController.default=function(req,res){
    try {
       
            res.render('../views/Settings/manageClass_Batch/index');
    } catch (error) {
        console.log(error);
    }
}

// ManageClass 
SettingsController.ViewManageClass=function(req,res){
    try {
        SettingManageClassVar.find({}).exec(function(err, result){
            if(err){
                console.log("Error:", err);
            }else{
                console.log(result);
                res.render('../views/Settings/manageClass_Batch/ManageClass/ViewManageClass',{ShowSettingClass:result});
            }
            });
       
    } catch (error) {
        console.log(error);
    }
}   
// Add view Manage Class
SettingsController.AddManageClass=function(req,res){
    try {
        res.render('../views/Settings/manageClass_Batch/ManageClass/NewManageClass.ejs');
    } catch (error) {
        console.log(error);
    }
}   
// Save Manage Class
SettingsController.SaveManageClass=function(req,res){
    try {
        var result=req.body;
        var arrlist = Object.values(result);
        if(arrlist.length > 8 && arrlist.length == 9 ){
           var calssData={
            classname :req.body.classname,
            sectionname:req.body.sectionname,
            code:req.body.code,
            gradingsystemtype:req.body.gradingsystemtype,
            enableelectiveselectio:req.body.enableelectiveselectio
           }
           var SettingClassSave = new SettingManageClassVar(calssData);
           SettingClassSave.save(function(err,result){
            if(err){
                console.log(err);
                res.render('../views/Settings/manageClass_Batch/ManageClass/NewManageClass.ejs');
            }else{
                console.log(result);
                console.log('insert Class Success!');
                var BatchData = {
                    batchname:req.body.batchname,
                    bacademicyear:req.body.bacademicyear,
                    bstartdate:req.body.bstartdate,
                    benddate:req.body.benddate,
                    refid:result.id,
                    bstatus:"active"
                }
                var SettingBatchSave = new SettingManageBatchVar(BatchData);
                SettingBatchSave.save(function(err){
                    if(err){
                        console.log(err);
                        res.render('../views/Settings/manageClass_Batch/ManageClass/NewManageClass.ejs');
                    }else{
                        console.log('Batch Saved Succes');
                        res.redirect("/setting");
                    }
                });
                
            }
           });
           console.log(req.body);
        }else{
            console.log('B'); 
            var calssData={
                classname :req.body.classname,
                sectionname:req.body.sectionname,
                code:req.body.code,
                gradingsystemtype:req.body.gradingsystemtype,
                enableelectiveselectio:0
               }
               var SettingClassSave = new SettingManageClassVar(calssData);
               SettingClassSave.save(function(err){
                if(err){
                    console.log(err);
                    res.render('../views/Settings/manageClass_Batch/ManageClass/NewManageClass.ejs');
                }else{
                    console.log('insert Class Success!');
                    var BatchData = {
                        batchname:req.body.batchname,
                        bacademicyear:req.body.bacademicyear,
                        bstartdate:req.body.bstartdate,
                        benddate:req.body.benddate,
                        bstatus:"active"
                    }
                    var SettingBatchSave = new SettingManageBatchVar(BatchData);
                    SettingBatchSave.save(function(err){
                        if(err){
                            console.log(err);
                            res.render('../views/Settings/manageClass_Batch/ManageClass/NewManageClass.ejs');
                        }else{
                            console.log('Batch Saved Succes');
                            res.redirect("/setting");
                        }
                    });
                    
                }
               });

        }
    // res.render('../views/Settings/manageClass_Batch/ManageClass/NewManageClass.ejs');
    } catch (error) {
        console.log(error);
    }
}   

SettingsController.editSettingManageClass=function(req,res){
    try {
        SettingManageClassVar.findOne({_id: req.params.id}).exec(function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
                res.render('../views/Settings/manageClass_Batch/ManageClass/UpdateManageClass',{SettingClassShow:result});             
            }
           
            
        });
        // res.render('../views/Settings/manageClass_Batch/ManageClass/NewManageClass.ejs');
    } catch (error) {
        console.log(error);
    }
}
SettingsController.update = function(req, res) {
    try {
        SettingManageClassVar.findByIdAndUpdate(req.params.id, { $set: { 
            classname:req.body.classname,
            sectionname: req.body.sectionname,
            code: req.body.code,
            gradingsystemtype: req.body.gradingsystemtype,
            enableelectiveselectio: req.body.enableelectiveselectio
        }}, { new: true }, function (err, result) {
            if(err){
                res.render('../views/Settings/manageClass_Batch/ManageClass/UpdateManageClass',{SettingClassShow:req.body});
            }else{
                res.redirect('/setting/ManageClass/view');
            }
        });

    } catch (error) {
        console.log(error);
    }
}
SettingsController.Delete=function(req, res){
    try {
        SettingManageClassVar.remove({_id: req.params.id}, function(err) {
            if(err) {
              console.log(err);
            }
            else {
              console.log("Class deleted ! ");
              res.redirect("/setting/ManageClass/view");
            }
          });
    } catch (error) {
        console.log(error);
    }
}   
SettingsController.ViewManageBatch = function(req, res){
    try {
        SettingManageClassVar.find({}).exec(function(err, result){
            if(err){
                console.log("Error:", err);
            }else{
                console.log(result.length);
                // res.render('../views/Settings/manageClass_Batch/ManageBatch/ViewManageBatch',{ShowBatch:result});
                res.render('../views/Settings/manageClass_Batch/ManageBatch/ViewManageBatch',{ShowClass:result});
                
            }
        });
    } catch (error) {
        console.log(error);
    }
}
SettingsController.fetch=function(req,res){
    try {

        var id=req.params.id;
        console.log(req);
        var refid = id;

        SettingManageBatchVar.findOne({refid: refid}).exec(function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result.author);
               res.send(JSON.stringify(result));
               
            }
        });
       
    } catch (error) {
     console.log(error);       
    }
}
module.exports=SettingsController;
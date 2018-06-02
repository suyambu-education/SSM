var mongoose = require("mongoose");
var library = require('../Models/librarybook');

var libraryController = {};
libraryController.default=function(req,res){
try {
    library.find({}).exec(function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(result);
            res.render('../views/library/index',{libraryBookList:result});
        }
    });
    // res.render('../views/library/index');
} catch (error) {
    console.log(error);
}
}
libraryController.defaultViews=function(req,res){
    try {
        library.find({}).exec(function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
                res.render('../views/library/libraryMaster');
            }
        });
        // res.render('../views/library/index');
    } catch (error) {
        console.log(error);
    }
    }
libraryController.AddNewBook=function(req,res){
try {
    library.find({}).sort({_id:-1}).limit(1).exec(function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(result);
            var resultLibrary=result[0].booknumber;
            resultLibrary=resultLibrary + 1;
            res.render('../views/library/AddNewBook',{booknumber:resultLibrary});
        }
    });
    
} catch (error) {
    console.log(error);
}
}
libraryController.save=function(req,res){
    try {
       var noofcopies= req.body.noofcopies;
       var booksNo=req.body.booknumber;
       booksNo = parseInt(booksNo);
       if(noofcopies!=undefined){
        for(var i = 0 ; i <noofcopies;i++){
        req.body.status="Available";
        var Booklist=req.body;
        Booklist.booknumber=booksNo;
        console.log(Booklist.booknumber + "Book Lists");
        var SaveBook = new library(Booklist);
        booksNo=booksNo+1;    
        SaveBook.save(function(error){
         if(error){
             console.log(error+"Make");
         }else{
             console.log("Update complete Copies : "+i);
             
         }
        });
       
        }   
        res.redirect('/library');
       }else{
        res.render('../views/library/AddNewBook');
       }
      
    } catch (error) {
        console.log(error);
    }
    }

libraryController.search=function(req,res){
    try {
        res.render('../views/library/searchBooks');
    } catch (error) {
        console.log(error);
    }

}
module.exports=libraryController;
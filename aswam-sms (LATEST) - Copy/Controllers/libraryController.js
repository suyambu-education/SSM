var mongoose = require("mongoose");
var library = require('../Models/librarybook');
var moment = require('moment');

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
libraryController.fetch=function(req,res){
    try {
        var booknumber=req.params.booknumber;
        console.log(booknumber);
        library.findOne({ booknumber: booknumber}).exec(function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
               res.send(JSON.stringify(result));
               
            }
        });
    } catch (error) {
        console.log(error);
    }

}
libraryController.viewBooksList=function(req,res){
    try {
        var id=req.params.id;
        library.findOne({ _id: id}).exec(function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
                res.render('../views/library/viewbooks',{Booklists : result});
               
            }
        });
        // res.render('../views/library/viewbooks');
    } catch (error) {
        console.log(error);
    }

}
libraryController.editBooks=function(req,res){
    try {
        id=req.params.id;
        library.findOne({ _id: id}).exec(function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
                var dateofbuying=moment(result.dateofbuying).format('YYYY-MM-DD');
                console.log(dateofbuying);
                res.render('../views/library/editbooks',{editdata : result,dateofbuying:dateofbuying });
            }
        });
    } catch (error) {
        console.log(error);
    }

}
libraryController.updateBooks=function(req,res){
    try {
        var leng=req.body.referencebook;
        console.log(req.body);

        if(leng !=undefined){
            id=req.params.id;
        console.log(req.body.referencebook);
        library.findByIdAndUpdate(req.params.id, { $set: { 
            booknumber:req.body.booknumber,
            title:req.body.title,
            author:req.body.author,
            customtags:req.body.customtags,
            dateofbuying:req.body.dateofbuying,
            status:req.body.status,
            referencebook:req.body.referencebook
        }},{ new: true }, function (err, result) {
        if (err) {
            console.log(err);
            res.render("../views/library/error");
            }
        });
       
            res.redirect('/library/view');
        }else{
        id=req.params.id;
        console.log(req.body.referencebook);
        library.findByIdAndUpdate(req.params.id, { $set: { 
            booknumber:req.body.booknumber,
            title:req.body.title,
            author:req.body.author,
            customtags:req.body.customtags,
            dateofbuying:req.body.dateofbuying,
            status:req.body.status,
            referencebook:""

        }},{ new: true }, function (err, result) {
        if (err) {
            console.log(err);
            res.render("../views/library/error");
            }
        });
     
            
            res.redirect('/library/view');
       
    }
    } catch (error) {
        console.log(error);
    }

}
libraryController.delete=function(req,res){
    try {
        library.remove({_id: req.params.id}, function(err) {
        if(err) {
          console.log(err);
        }
        else {
          console.log("Book Delet");
          res.redirect('/library/view');
        }
      });
       
    } catch (error) {
        console.log(error);
    }

}
libraryController.issuebook=function(req,res){
    try {
        res.render('../views/library/issueBook');
    } catch (error) {
        console.log(error);
    }
}
module.exports=libraryController;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AddParentsSchema = new Schema({
    Admission_number : {type: String, required: false},
    First_Name : {type:String,required:false},
    Last_Name : {type : String , required:false },
    Relation:{type:String,required:false},
    Date_of_Birth:{type : Date,required:false},
    Education:{type:String,required:false},
    Occupation:{type:String,required:false},
    Income:{type:Number,required:false},
    Address_Line1 : {type:String,required:false},
    Address_Line2 : {type:String,required:false},
    City:{type:String,required:false},
    State:{type:String,required:false},
    Country:{type:String,required:false},
    phone1: {type: Number, required: false},
    phone2: {type: Number, required: false},
    Mobile:{type:Number,required:false},
    Email:{type:String,required:false},
    updated_at: { type: Date, default: Date.now }
});



module.exports = mongoose.model('Parents', AddParentsSchema);
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AddStudentSchema = new Schema({
    Admission_number : {type: String, required: false},
    Admission_Date:{type: Date ,required:false},
    First_Name : {type:String,required:false},
    Middle_Name : { type : String,required:false },
    Last_Name : {type : String , required:false },
    Date_of_Birth:{type : Date,required:false},
    Gender:{type:String, required:false},
    Blood_group : { type:String,required:false },
    Birth_Place : {type:String,required:false},
    Nationality:{type:String,required:false},
    Mother_Tongue : {type:String,required:false},
    Category:{type:String,required:false},
    Religion:{type:String,required:false},
    Address_Line1 : {type:String,required:false},
    Address_Line2 : {type:String,required:false},
    City:{type:String,required:false},
    State:{type:String,required:false},
    PIN_code:{type:Number,required:false},
    Country:{type:String,required:false},
    phone: {type: Number, required: false},
    Mobile:{type:Number,required:false},
    Email:{type:String,required:false},
    Class:{type:String,required:false},
    Batch :{type:String,required:false},
    Roll_number : {type:Number,required:false},
    Biometric_ID: {type:String,required:false},
    Enable_email_features :{type:String},
    updated_at: { type: Date, default: Date.now }
});



module.exports = mongoose.model('addStudent', AddStudentSchema);
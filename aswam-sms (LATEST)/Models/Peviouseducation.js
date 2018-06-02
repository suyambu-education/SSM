var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var addPreviousEducation = new Schema({
    Institution_Name:{type:String,required:false},
    Class:{type:String,required:false},
    Year:{type:Number,required:false},
    Total_marks:{type:Number,required:false},
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('previousEdu', addPreviousEducation);
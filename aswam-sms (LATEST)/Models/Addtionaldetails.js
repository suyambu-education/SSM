var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var addAddtion =new Schema({
    Height:{type:Number,required:false},
    Weight:{type:Number,required:false},
    Allergies:{type:String,required:false},
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('addtionDetails', addAddtion);
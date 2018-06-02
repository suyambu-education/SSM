var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LibraryBooks = new Schema({
    bookadditionmode:{type:String,required:false},
    booknumber:{type:Number,required:false},
    title:{type:String,required:false},
    author:{type:String,required:false},
    referencebook:{type:String,required:false},
    customtags:{type:String,required:false},
    noofcopies:{type:Number,required:false},
    status:{type:String,required:false},
    bookedition : {type:Number,required:false},
    dateofbuying :{ type: Date,required:false},
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LibraryBooks', LibraryBooks);
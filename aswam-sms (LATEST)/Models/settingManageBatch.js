var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SettingsManageBatch = new Schema({
    batchname: {type: String, required: false},
    bacademicyear: {type: String, required: false},
    bstartdate: {type: Date, required: false},
    benddate: {type: Date, required: false},
    bstatus:{type: String, required: false},
    refid:{type:String,required:false},
    updated_at: { type: Date, default: Date.now },
});


module.exports = mongoose.model('SettingsManageBatch', SettingsManageBatch);
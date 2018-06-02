var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SettingsManageClass = new Schema({
    classname: {type: String, required: false},
    sectionname: {type: String, required: false},
    code: {type: String, required: false},
    gradingsystemtype: {type: String, required: false},
    enableelectiveselectio: {type: Number, required: false},
    updated_at: { type: Date, default: Date.now },
});


module.exports = mongoose.model('SettingsManageClass', SettingsManageClass);
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    name: {type: String, required: true},
    phone: {type: Number, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
    updated_at: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Student', StudentSchema);
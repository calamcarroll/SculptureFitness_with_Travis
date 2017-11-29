var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
    Username: String,
    fName: String,
    lName: String,
    Email: String,
    Weight: Number,
    Height: Number,
    BodyFat: Number,
    hasGoneGym: Number
});

module.exports = mongoose.model('User', UsersSchema);
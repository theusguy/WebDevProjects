var mongoose = require("mongoose");

// 4.) 
var passportLocalMongoose = require("passport-local-mongoose")

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

module.exports = mongoose.model("User", UserSchema)
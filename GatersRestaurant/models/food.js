var mongoose = require("mongoose");

//Set up Schema
var foodSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    price: String,
    pricewfries: String,
    subcategory: String
});

//Set up model which also sets up collection in our DB
module.exports = mongoose.model("Food", foodSchema);
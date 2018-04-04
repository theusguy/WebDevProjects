var mongoose = require("mongoose");

//Schema set up
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

//Compiling Schema to Model
module.exports = mongoose.model("Campground", campgroundSchema);
//Set up Express Framework
var express = require("express");
var app = express();

//Listen for routes
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is listening");
});

//homepage
app.get("/", function(req, res) {
    var text = "Home Page";
    res.render("home.ejs", {homepage: text})
});

// Set up Repeat Page
app.get("/repeat/:string/:multiplier", function(req, res) {
    var str = req.params.string;
    var multiplier = req.params.multiplier;
    res.render("repeat.ejs", {num : multiplier, phrase : str});
});
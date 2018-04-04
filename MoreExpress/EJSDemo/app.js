var express = require("express");

var app = express();

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is listening");
});

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home.ejs")
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    // res.send("You fell in love with " + thing);
    res.render("love.ejs", {thingVar: thing});
});
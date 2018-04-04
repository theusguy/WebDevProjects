var express = require("express");
var app = express();


var bodyParser = require("body-parser");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});

app.get("/", function(req, res) {
    res.render("home");
});

app.post("/addfriend" ,function(req, res) {
    friends.push(req.body.newfriend);
    res.send("You have reached the post route");
    res.redirect("/friends")
    
});

app.get("/friends", function(req, res) {
    
    res.render("friends", {friends: friends});
});
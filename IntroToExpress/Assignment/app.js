//Intializing Express Framework
var express = require("express");
//Creating an express object?
var app = express();

//Telling code to listen for any activity
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});

//Root page should welcome to assignment
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

// "/speak/pig" should print "The pig says 'Oink'"
app.get("/speak/pig", function(req, res) {
    res.send("The Pig says \'Oink\'");
});

// "/speak/cow" should print ...
app.get("/speak/cow", function(req, res) {
    res.send("The Cow says \'Moo\'");
});

// "/speak/dog"  should print
app.get("/speak/dog", function(req, res) {
    res.send("The dog says \'Woof Woof\'");
});

app.get("/repeat/hello/3", function(req, res) {
    res.send("hello hello hello");
});

app.get("/repeat/hello5", function(req, res) {
    res.send("hello hello hello hello hello");
});
app.get("/repeat/blah/2", function(req, res) {
    res.send("blah blah");
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

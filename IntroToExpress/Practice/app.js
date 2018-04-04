//Including Express framework in our code
var express = require("express");
//Creating an express object using constructor and 
//saving it to var app.
var app = express();
//For any routes to work we need to tell Express to listen
//Use app.listen(asking Cloud9 what port to use,what IP to use)
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});

//Include cat-me 
var cats = require("cat-me");

//Include knock-knock-jokes
var knock = require("knock-knock-jokes");

//define a route to /cats
app.get("/cats", function(req, res) {
    res.send("Welcome to the Cats Page");
    console.log(cats());
})
//define a route to /knock-knock-jokes
app.get("/knock", function(request, response) {
    response.send("Welcome to the Knock-Knock Jokes Page");
    console.log(knock());
})

//route parameters
app.get("/r/:subReddit/comments/", function(req, res) {
    res.send("Welcome to subreddit page");
})

app.get("*", function(req, res) {
    res.send("Error 404");
})

//Express is initialized
var express = require("express");
//Save express into app var
var app = express();
//For any routes to work we need to tell Express to listen
//Use app.listen(asking Cloud9 what port to use,what IP to use)
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});
// "/" => "Hi there!"
//We are defining a route
// "/" is the home directory
app.get("/", function(request, response) {
    response.send("Hi there!");
})
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!");
})
// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    //console.log will print on terminal - bash
    res.send("MEOW")
    //res.send will send this string as response to get request to /dog
})
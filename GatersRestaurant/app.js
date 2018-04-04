//Setting up Express
var express = require("express");
var app = express();

//Set up Mongoose DB stuff
var mongoose = require("mongoose");
//Connecting code to DB
mongoose.connect("mongodb://localhost/gaters_restaurant");

app.set("view engine", "ejs");

var Food = require("./models/food");

var seedDB = require("./seeds");

//SET UP ROUTES

//Landing Page
app.get("/", function(req, res) {
    res.render("landing");
});

//INDEX
app.get("/menu", function(req, res) {
    Food.find({}, function(err, allFoods) {
        if(err) {
            console.log("ERROR in INDEX(/menu) route");
            console.log(err)
        } else {
            res.render("index", {foods: allFoods})
        }
    });
});

//NEW
app.get("/menu/new", function(req, res) {
    res.render("new");
});

//CREATE
app.post("/menu", function(req, res) {
    Food.create(req.body.food, function(err, newFood) {
        if(err) {
            console.log("ERROR FROM CREATE(/menu) route");
            console.log("err");
        } else {
            //redirect to index
            res.redirect("/menu");
        }
    });
});

//Setting up Express to listen for our routes
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is listening");
});
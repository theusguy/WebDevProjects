//Setting up Express
var express = require("express");
var app = express();

var Campground = require("./models/campground")
//Set up body parser
var bodyParser = require("body-parser");
//Set up Mongoose
var mongoose = require("mongoose");
//Setting up with default data for website
var seedDB = require("./seeds");

var Comment = require("./models/comment");
// 3.) Set up User model which will be used with passport
var User = require("./models/user");
// 1.) Set up Passport
var passport = require("passport");
// 2.) Set up passport-local
var LocalStrategy = require("passport-local");

//Connect Mongoose to our DB yelp_camp
mongoose.connect("mongodb://localhost/yelp_camp", { useMongoClient: true});
//Use body parser
app.use(bodyParser.urlencoded({extended: true}));
//setting render files to automatically know they are .ejs files.
app.set("view engine", "ejs");

//Setting up Epress to look in public file directory as well
app.use(express.static(__dirname + "/public"));

//Executing function that will create default data for YelpCamp
seedDB();


// Root Landing Page
app.get("/", function(req, res){
    //Render back the landing.ejs template
    res.render("landing");
})

//INDEX page, listing all campgrounds
app.get("/campgrounds", function(req, res){
    //Get all campgrounds from db
    Campground.find({}, function(err, allCampgrounds) {
        if(err) {
            // if err then console.log the error
            console.log(err);
        } else {
            //else render the index.ejs template and send allCampgrounds
            //array from find function to campgrounds var in index.ejs
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
});

//CREATE page, grab the info of new campground from the request's body
//and pass into DB
app.post("/campgrounds", function(req, res) {
    //get data from form that sent a request to this POST
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err) {
            //print the err if there is one
            console.log(err);
        } else {
            //else we would print the newlyCreated but no need to
            //redirect to campgrounds page
            res.redirect("/campgrounds");
        }
    })
});

//NEW page where we have the form to fill 
app.get("/campgrounds/new", function(req, res){
    res.render("campgrounds/new");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// ======================================
// COMMENT ROUTES
// ======================================

app.get("/campgrounds/:id/comments/new", function(req, res) {
    //find campground by id
    Campground.findbyId(req.params.id, function(err, campground) {
        if(err) {
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    })
});

app.post("/campgrounds/:id/comments", function(req, res) {
    //lookup campground by ID
    Campground.findByID(req.params.id, function(err, campground) {
        if(err) {
            console.log(err);
            res.redirect("/campgrounds")
        } else {
            //create new comment
            Comment.create(req.body.comment, function(err, comment) {
                if(err) {
                    console.log(err);
                } else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground._id)
                }
            })
            //connect new comment to campground
            //redirect to campgrounds show page
        }
    })
    
})


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp Server has started");
});


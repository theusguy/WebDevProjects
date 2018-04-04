//Setting up express
//Used for routes to diff pages
var express = require("express");
var  app = express();

//Setting up mongoose
//Used for accessing DB and storing data (DB name: blog_app)
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_app");

//Setting up body-parser
//Used for parsing 'request data' from forms from string to code
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

//Setting up method override
var methodOverride = require("method-override");

//****MUST GO AFTER BODY_PARSER
//Setting up express-sanitizer(Used to clear our textbody from any dangerous scripts)
var expressSanitizer = require("express-sanitizer")
app.use(expressSanitizer())

//Setting all routes to understadn our templates are .ejs file
app.set("view engine", "ejs");

//Telling express to look in public file as well (for CSS files)
app.use(express.static("public"));

//Telling express to use method-override 
//and expect "_method" as a means of using it
app.use(methodOverride("_method"));

//Setting up a schema how each data set will look like
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    //this basically says that we will be expecting Date for created property
    //but its default value will be Date.now
    created: {type: Date, default: Date.now}
});
//model config (Collection name: blogs)
var Blog = mongoose.model("Blog", blogSchema);

// //We are creating this blog manually as a test
// Blog.create({
//     title: "Test Blog",
//     image: "https://unsplash.com/?photo=I79wWVFyhEQ",
//     body: "This is a test blog"
// });


//RESTful Routes

//Redirecting home page to to index
app.get("/", function(req, res) {
    res.redirect("/blogs");
});

//NEW page
app.get("/blogs/new", function(req, res) {
    res.render("new");
});

//CREATE page
app.post("/blogs", function(req, res) {
    // create blog
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, newBlog) {
        if(err) {
            res.render("new");
        } else {
            //redirect, to the index
            res.redirect("/blogs")
        }
    });
    
});

//INDEX Page
app.get("/blogs", function(req, res) {
    //Get all blogs from DB
    Blog.find({}, function(err, allBlogs) {
        if(err) {
            console.log(err)
        } else {
            //Render out the Index page
            res.render("index", {allBlogs: allBlogs});
        }
    });
});


//SHOW
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if(err) {
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog})
        }
    })
});

//EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if(err) {
            res.redirect("/blogs")
        } else {
            res.render("edit",{blog: foundBlog});
        }
    });
    
});

//UPDATE
app.put("/blogs/:id", function(req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
        if(err) {
            res.redirect("/blogs"); 
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});


//DELETE
app.delete("/blogs/:id", function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    });
    
});


//Setting up express to listen for any activity and routes
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is listening");
});


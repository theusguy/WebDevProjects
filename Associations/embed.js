//Showing how to embed data..one to many relationship data

//Setting up Mongoose
var mongoose = require("mongoose");
//Connectin mongoose to a DB
mongoose.connect("mongodb://localhost/blog_demo");


//POST - title and content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

//USER - email and name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);


//Create new User
var newUser = new User({
    email: "theusguy@gmail.com",
    name: "Usman"
});

//Crating new post
var newPost = new Post({
    title: "First Post",
    content: "This is my first post in the embed exercise"
});

//Crating antoher new post
var anotherNewPost = new Post({
    title: "Second Post",
    content: "This is my second post in the embed exercise"
});

//Sending posts to newUser
newUser.posts.push(newPost);
newUser.posts.push(anotherNewPost);

//Saving changes to newUser
newUser.save(function(err, savedUser) {
    if(err) {
        console.log(err);
    } else {
        console.log(savedUser);
    }
});































// var mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/blog_demo");


// //POST - title and content
// var postSchema = new mongoose.Schema({
//     title: String,
//     content: String
// });

// var Post = mongoose.model("Post", postSchema);

// //USER - email and name
// var userSchema = new mongoose.Schema({
//     email: String,
//     name: String,
//     posts: [postSchema]
// });

// var User = mongoose.model("User", userSchema);



// // //Creating new user for testing purposes
// // var newUser = new User({
// //     email: "hermione@hogwarts.edu",
// //     name: "Hermione Granger"
// // });
// // newUser.posts.push({
// //     title: "How to brew polyjuice potion",
// //     content: "Just Kidding.Go to potions class to learn it!"
// // });

// // newUser.save(function(err, user) {
// //     if(err) {
// //         console.log(err);
// //     } else {
// //         console.log(user);
// //     }
// // });

// //Creating new post for testing purposes
// // var newPost = new Post({
// //     title: "Reflections on Apples",
// //     content: "They are delicious"
// // });
// // newPost.save(function(err, post) {
// //     if(err) {
// //         console.log(err);
// //     } else {
// //         console.log(post);
// //     }
// // });

// User.find({name: "Hermione Granger"}, function(err, user) {
//     if(err) {
//         console.log(err);
//     } else {
//         user.posts.push({
//             title: "Three things I really hate",
//             content: "Voldemort Voldemort Voldemort"
//         });
//         user.save(function(err, user) {
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log(user);
//             }
//         })
//     }
// });


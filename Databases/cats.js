var mongoose = require("mongoose");
//Connecting to cat_app database which doesn't exist yet
//So it makes this DB
mongoose.connect("mongodb://localhost/cat_app", {useMongoClient: true});

//Created a schema which defines a pattern/plan we will try to use in our data
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
})

//We saved the schema into a model which basically adds all these
//methods to Cat that we cna use to add data and etc
//We use Cat specifically becuase its the singular version of the data we are storing
//so it will create a collection called cats (plural of the form we named it)
//Conventional for the var and model to be capital
var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to DB

//Creating a new cat using model
// var george = new Cat({
//     name: "Ms.Norris", 
//     age: 7, 
//     temperament: "Evil"
// });

// //Now saving that cat to our DB but we need to make sure it actually
// //saved or not. So we use a callback function to verify
// // **NOTE: We dont asked for george on callback becuase thats
// //what JS is trying to send to DB, instead we call on cat to 
// //get back what the DB has stored
// george.save(function(err, cat){
//     if(err) {
//         console.log("Somthing went wrong")
//     } else {
//         console.log("We just saved a cat to DB");
//         console.log(cat);
//     }
// });

// //retreive all cats from the DB  and console.log each one
// Cat.find({}, function(err, cats) {
//     if(err) {
//         console.log("OH NO, ERROR");
//         console.log(err);
//     } else {
//         console.log("ALL THE CATS");
//         console.log(cats);
//     }
// })

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
    if(err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});

var mongoose = require("mongoose");
var Food = require("./models/food");

var data = [
    {
        name: "Grilled Streak",
        description: "Thin Marinated Slices of Steak, Tomatoes, Seasoned Onions, Lettuce, Mayonnaise-Garlic spread, On LAVASH Bread",
        price: "$6.99",
        pricewfries: "$8.50",
        subcategory: "Grilled Wrap"
    },
    {
        name: "Grilled Chicken",
        description: "Thin Marinated Slices of Chicken, Tomatoes, Seasoned Onions, On Lettuce, Mayonnaise-Garlic spread, On LAVASH Bread.",
        price: "$6.99",
        pricewfries: "$8.50",
        subcategory: "Grilled Wrap"
    },
    {
        name: "Chicken Garlic",
        description: "Thin Marinated Slices of Steak, Tomatoes, Seasoned Onions, Mushrooms, Lettuce, Mayonnaise-Garlic spread, On LAVASH Bread.",
        price: "$5.99",
        pricewfries: "$7.50",
        subcategory: "Grilled Wrap"
    },
    {
        name: "Steak Gyro",
        description: "Thin Marinated Slices of Steak, Tomatoes, Seasoned Onions, Lettuce, Mayonnaise-Garlic spread, Tzatziki Sauce,On Pita Bread.",
        price: "$5.99",
        pricewfries: "$7.50",
        subcategory: "Grilled Wrap"
    },
    {
        name: "Chicken Gyro",
        description: "Thin Marinated Slices of Chicken, Tomatoes, Seasoned Onions, Lettuce, Mayonnaise-Garlic spread, Tzatziki Sauce, On Pita Bread.",
        price: "$5.99",
        pricewfries: "$7.50",
        subcategory: "Grilled Wrap"
    },
    {
        name: "Veggie Gyro",
        description: "Mushrooms, Bell Pepper, Tomatoes, Seasoned Onions, Teriyaki Sauce, Lettuce, Mayonnaise-Garlic spread, Tzatziki Sauce On Pita Bread. ",
        price: "$5.99",
        pricewfries: "$7.50",
        subcategory: "Grilled Wrap"
    },
    {
        name: "Steak Plate",
        description: "Thin Marinated Slices of Steak Over Basmati Rice, Served with Side Of Hummus, Greek Salad, and Pita Bread.",
        price: "$8.99",
        pricewfries: "",
        subcategory: "Grilled Platter",
    },
    {
        name: "Chicken Plate",
        description: "Thin Marinated Slices of Chicken Over Basmati Rice, Served with Side Of Hummus, Greek Salad and Pita Bread.",
        price: "$8.99",
        pricewfries: "",
        subcategory: "Grilled Platters",
    },
    {
        name: "Chicken Mediterranean Plate",
        description: "Thin Marinated Slices Of Chicken Over Basmati Rice, Mushrooms, Served with Side Of Hummus, Greek Salad and Pita Bread.",
        price: "$8.99",
        pricewfries: "",
        subcategory: "Grilled Platters",
    },
    {
        name: "Gyro Plate",
        description: "Thin Marinated Slices of Gyro Meat Over Basmati Rice, Served with Side Of Tzatziki, Greek Salad, and Pita Bread.",
        price: "$8.99",
        pricewfries: "",
        subcategory: "Grilled Platters",
    },
    {
        name: "Chicken Gyro Plate",
        description: "Thin Marinated Slices of Chicken-Gyro Meat Over Basmati Rice, Served with Side of Tzatziki, Greek Salad and Pita Bread.",
        price: "$8.99",
        pricewfries: "",
        subcategory: "Grilled Platters",
    },
    {
        name: "Combination Plate",
        description: "Thin Marinated Slices of Chicken and Steak Over Basmati Rice, Served with Side Of Hummus, Greek Salad and Pita Bread.",
        price: "$8.99",
        pricewfries: "",
        subcategory: "Grilled Platters",
    },
    {
        name: "Lamb Kabob",
        description: "Two Skewers of Marinated Lamb Leg Over Basmati Rice, Topped with Grilled & Tomatoes and Onions, Served with Side of Hummus, Greek Salad and Pita Bread.",
        price: "$12.99",
        subcategory: "Kabob Platters"
    },
    {
        name: "Chicken Kabob",
        description: "Two Skewers of Marinated Chicken Breast Over Basmati Rice, Topped with Grilled Tomatoes and Onions, Served with Side Of Hummus, Greek Salad, and Pita Bread.",
        price: "$10.99",
        subcategory: "Kabob Platters"
    },
    {
        name: "Combination Kabob",
        description: "One Skewer of Marinated Lamb Leg and One Skewer of Marinated Chicken Breast Over Basmati Rice, Topped with Grilled Tomatoes and Onions, Served with Side Of Hummus, Greek Salad, and Pita Bread",
        price: "$11.99",
        subcategory: "Kabob Platters"
    },
    {
        name: "Vegetarian Plate",
        description: "2 pieces of Falafel, Side of Hummus, Baba Ghanouj, Mediterranean Salad, 2 pieces of Dolma and Pita Bread.",
        price: "$8.99",
        subcategory: "Vegetarian"
    },
    {
        name: "Falafel Wrap",
        description: "2 pieces of Falafel, Tomatoes, Seasoned Onions, Lettuce, Topped with Tahini Sauce On LAVASH Bread.",
        price: "$5.99",
        subcategory: "Vegetarian"
    },
    {
        name: "Hummus Wrap",
        description: "Garbanzo Dip, Tomatoes, Seasoned Onions, Lettuce, Topped with Tahini Sauce On LAVASH Bread.",
        price: "$5.99",
        subcategory: "Vegetarian"
    },
    {
        name: "Baba Ghanouj Wrap",
        description: "Egg Plant Dip, Tomatoes, Seasoned Onions, Lettuce, Topped with Tahini Sauce On LAVASH Bread.",
        price: "$5.99",
        subcategory: "Vegeterian"
    },
    {
        name: "Cheese Burger",
        description: "Beef Patty, Tomatoes, Seasoned Onions, Lettuce, Mayonnaise and Swiss Cheese on sesame Bun.",
        price: "$4.50",
        pricewfries: "$6.50",
        subcategory: "Burger",
    },
    {
        name: "Double Cheese Burger",
        description: "2 Beef Patty, Tomatoes, Seasoned Onions, Lettuce, Mayonnaise and Swiss Cheese on sesame Bun.",
        price: "$5.99",
        pricewfries: "$7.50",
        subcategory: "Burger"
    },
    {
        name: "Ham Burger",
        description: "Beef Patty, Lettuce, Tomatoes, Seasoned Onions, Mayonnaise and Swiss Cheese on sesame Bun.",
        price: "$5.99",
        pricewfries: "$7.50",
        subcategory: "Burger"
    },
    {
        name: "Philly Steak",
        description: "Thin Marinated Slices of Steak, Tomatoes, Seasoned Onions, Mushrooms, Bell Pepper, Mayonnaise, and Swiss Cheese on French Roll.",
        price: "$5.99",
        pricewfries: "$7.50",
        subcategory: "Burger"
    },
    {
        name: "Chicken-Philly Steak",
        description: "Thin Marinated Slices of Chicken, Tomatoes, Seasoned Onions Mushrooms, Bell Pepper, Mayonnaise, and Swiss Cheese on French Roll.",
        price: "$5.99",
        pricewfries: "$7.50",
        subcategory: "Burger"
    },
    {
        name: "Greek Salad",
        description: "Fresh lettuce, Onions, Bell Pepper, Tomato, Feta Cheese, Lemon Juice & Olive Oil.",
        price: "$5.99",
        pricewfries: "",
        subcategory: "Fresh Salad"
    },
    {
        name: "Caesar Salad",
        description: "Fresh lettuce, Onions, Bell Pepper, Tomato, Seasoning with Caesar dressing.",
        price: "$5.99",
        pricewfries: "",
        subcategory: "Fresh Salad"
    },
    {
        name: "Tabouleh Salad",
        description: "Fresh Zesty Salad of Fine chopped Parsley, Tomatoes, Red Onions Bulger Wheat, Lime Juice & Olive Oil.",
        price: "$4.99",
        pricewfries: "",
        subcategory: "Fresh Salad"
    },
    {
        name: "Chicken Salad",
        description: "Rotisserie Grilled Marinated Slice of Chicken Over Salad with Home Made dressing.",
        price: "$8.50",
        subcategory: "Fresh Salad"
    },
    {
        name: "Hummus",
        description: "Garbanzo Beans, Olive Oil, Fresh Garlic, Tahineh Sauce Topped with Paprika.",
        price: "$3.95",
        subcategory: "Dips and Side Orders"
    },
    {
        name: "Baba Ghanouj",
        description: "Roasted Eggplant, Olive, Fresh Garlic, Lemon Juice, Tahineh Sauce, White Pepper, Black Pepper.",
        price: "$3.95",
        subcategory: "Dips and Side Orders"
    },
    {
        name: "Dolma",
        description: "Stuffed Grape Leaves with rice and Mediterranean Spices and drizzled with olive oil (3 Pieces).",
        price: "$2.50",
        subcategory: "Dips and Side Orders"
    },
    {
        name: "Falafel",
        description: "Ground Garbanzo Beans mixed with Onions, Green Onions, Cilantro, Jalapeno and Mediterranean Spices.",
        price: "$1.99",
        pricewfries: "",
        subcategory: "Dips and Side Orders"
    },
    {
        name: "Rice",
        description: "Basmati Rice cooked with special Mediterranean Spices Mixed with salt and Olive Oil.",
        price: "$3.00",
        pricewfries: "",
        subcategory: "Dips and Side Orders"
    },
    {
        name: "French Fries",
        description: "Fresh Fried Potatoes seasoned with Mediterranean Spices.",
        price: "$2.25",
        pricewfries: "",
        subcategory: "Dips and Side Orders"
    }
];

function seedDB(){
   //Remove all foods
   Food.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Food.create(seed, function(err, food){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a food item");
                
                }
            });
        });
    }); 
}

module.exports = seedDB;

    // name: String,
    // image: String,
    // description: String,
    // price: String,
    // pricewfries: String,
    // subcategory: String
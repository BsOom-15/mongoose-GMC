const mongoose = require("mongoose");
require('dotenv').config(); // Load environment variables from .env file
const Persone = require("./Persone");

mongoose.connect(process.env.MONGO_URI)

run()
async function run() {
    try
    {
    //     // Create and Save a Record of a Model:-
    //     const persones = await Persone.create(
    //         {
    //             name : "BsOom",
    //             age : 21,
    //             favoriteFoods : ["Pizza","Salad"]
    //         }
    // )  
    //     persones.save()

    //  // Create Many Records with model.create():-
    // const persones = 
    // [
    //     {
    //         name : "Johan",
    //         age : 30,
    //         favoriteFoods : ["Steak", "Suchi"]
    //     },
    //     {
    //         name: "Alice", 
    //         age: 25, 
    //         favoriteFoods: ["Pasta", "Burger"]
    //     },
    //     { name: "Bob", 
    //     age: 35, 
    //     favoriteFoods: ["Steak", "Salad"] 
    //     }
    // ];
    // const people = await Persone.create(persones)

    // //Create several people with Model. create(), using the function argument arrayOfPeople:-
    // const persones = await Persone.find();


    //  //Use model.findOne() to Return a Single Matching Document from Your Database:-
    // const persones = await Persone.findById('661b1adbeba150ebad106e03')

    //Perform New Updates on a Document Using model.findOneAndUpdate():-
    // const persones = await Persone.findOne({name : "Alice"}).updateOne({name:"BsOom"})


    // //Delete One Document Using model:-
    // const persones = await Persone.findOne({name : "Bob"}).deleteOne({name : "Bob"})

    //  //Chain Search Query Helpers to Narrow Search Results Find people who like burritos. Sort them by name, limit the results to two documents, and hide their age. Chain .find(), .sort(), .limit(), .select(), and then .exec(). Pass the done(err, data) callback to exec()
    const result = await Persone.find({favoriteFoods : "Burger"})
                                .sort({name:1})
                                .limit(2)
                                .select({age:0})
                                .exec();
                                console.log(result);
                            }

    catch(e)
    {
        console.error(`Message Error: ${e}`);
    }
}

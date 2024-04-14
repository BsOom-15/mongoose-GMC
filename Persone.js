const mongoose = require("mongoose");
const { type } = require("os");

const personSchema = new mongoose.Schema({
    name : 
    {
        type : String,
        required : true    
    },
    age : Number,
    favoriteFoods : [String]
})

module.exports = mongoose.model("Persone", personSchema);
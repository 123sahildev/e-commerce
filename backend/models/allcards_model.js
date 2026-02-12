const mongoose = require("mongoose");


const allcardts_schema = new mongoose.Schema(
    {
        userId : {
            type : String,
            required : true
        }
    }

);

module.exports = mongoose.model("Getllcards", allcardts_schema, "Cards");
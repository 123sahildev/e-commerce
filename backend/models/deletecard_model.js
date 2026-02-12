const mongoose = require("mongoose");

const deletecard_schema = new mongoose.Schema(
    {
        id : {
            type : Number,
            required : true
        },

        userId : {
            type : String,
            required : true
        }
    }
)

module.exports = mongoose.model("DeleteCard", deletecard_schema, "Cards");
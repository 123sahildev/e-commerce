const mongoose = require("mongoose");

const register_schema = new mongoose.Schema(
    {
        username :{
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true,
            unique : true
        },

        password : {
            type : String,
            required : true
        }
    }
);

module.exports = mongoose.model("Register", register_schema, "Register")
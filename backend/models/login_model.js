const mongoose = require("mongoose");


const login_schema = new mongoose.Schema(
    {
        email : {
            type : String,
            required : true
        },

        password : {
            type : String,
            required : true
        }
    }
);


module.exports = mongoose.model("Login", login_schema, "Register");
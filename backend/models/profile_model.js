const mongoose = require("mongoose");

const profile_schema = new mongoose.Schema({
    userId : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("Profile", profile_schema, 'Register');
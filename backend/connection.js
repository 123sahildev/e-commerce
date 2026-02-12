const mongoose = require("mongoose");

const Connected = async () => {
    try {
        await mongoose.connect("mongodb+srv://userdb1:123sahildevmongo@cluster1.lbpwib9.mongodb.net/firstdb?retryWrites=true&w=majority"
        )
        console.log('connected sucessfully!')
    } catch (err) {
        console.log(err);
    
    }
}

module.exports = Connected
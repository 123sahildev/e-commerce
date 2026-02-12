const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        data : {
            type :  mongoose.Schema.Types.Mixed,
            required : true
        },
       
    }
)


module.exports = mongoose.model("CartController", cartSchema, 'Cards');
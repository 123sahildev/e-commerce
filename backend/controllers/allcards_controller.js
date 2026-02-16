const Getllcards = require("../models/addtocart_model");

const GetllCardsAction = async (req, res) => {
    try {

        let { userId } = req.body;

        let collection = await Getllcards.find({'data.userId' : userId});
        if (!collection) {
            return res.json({message : "No product in cart yet."})
        }

        return res.json({message : collection});


    } catch (err) {
        console.log(err);
        
    }

}


module.exports = GetllCardsAction;
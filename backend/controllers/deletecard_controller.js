const DeleteCard = require("../models/deletecard_model");

const DeleteCardAction = async (req, res) => {
    let { id, userId } = req.body;

    let response = await DeleteCard.findOneAndDelete( { 'data.id' : id, 'data.userId' : userId } );

    return res.json({ message : "The card products is deleted successfully!" });

}


module.exports = DeleteCardAction;


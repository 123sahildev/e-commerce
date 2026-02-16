const CartController = require("../models/addtocart_model")


const AddCartAction = async (req, res) => {
    console.log('cha raha hai allcards!');
    
    try {

        let { data } = req.body;
        let checkdouble = await CartController.findOne({'data.id' : data.id});

        if (checkdouble) {
            return res.json({message : "The products already exist in cards" });
        }

        let checkres = await CartController.create({ data : data});
        return res.json({message : checkres})

    } catch (err) {
        console.log(err);
        
    }

}

module.exports = AddCartAction;
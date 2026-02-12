const CartController = require("../models/addtocart_model")


const AddCartAction = async (req, res) => {
    let { data } = req.body;
    let checkdouble = await CartController.findOne({'data.id' : data.id});

    if (checkdouble) {
        return res.json({message : "The products already exist in cards" });
    }

    let checkres = await CartController.create({ data : data});
    return res.json({message : checkres})

}

module.exports = AddCartAction;
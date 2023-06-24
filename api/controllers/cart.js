const Cart = require('../models/Cart');
const Product = require('../models/Product');

module.exports.updateCartbyUserId = async (req, res) => {
    const userId = req.params.userId;

    try {
        const updatedCart = await Cart.findOneAndUpdate({ userId: userId }, {
            $set: req.body
        }, { new: true });

        if (updatedCart) return res.status(200).json(updatedCart);
        return res.status(404).json({ message: "Cart for user" + userId + " doesn't exist" });
    }
    catch (err) {
        if (err.code === 11000) return res.status(400).json({ error: JSON.stringify(err.keyValue) + " already exists" });
        if (err.name === "ValidationError") {

            const message = Object.values(err.errors).map(value => value.message);
            return res.status(400).json({
                error: message
            })
        }
        console.log(err);
        res.status(500).json();
    }
};

module.exports.deleteCartbyUserId = async (req, res) => {

    var userId = req.params.userId;
    console.log('delte route')
    try {

        const deletedCart = await Cart.findOneAndDelete({ userId: userId });

        if (deletedCart) return res.status(204).json();
        return res.status(404).json({ message: "Cart for user" + userId + " doesn't exist" });

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }

};

module.exports.getCartByUserId = async (req, res) => {
    var userId = req.params.userId;

    try {
        const cart = await Cart.findOne({ userId: userId }
        );
        if (cart) {

            return res.json(cart);
        }


        return res.status(404).json({ message: "Cart doesn't exist" });
    }
    catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};


module.exports.getAllCarts = async (req, res) => {


    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {

        carts = await Cart.find();

        res.status(200).json(carts);
    }
    catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports.createCart = async (req, res) => {


    if (!req.user.isAdmin) req.body.userId = req.user.id;
    const newCart = new Cart(req.body);

    try {
        const result = await newCart.save();
        return res.status(201).json(result);

    }
    catch (err) {
        if (err.code === 11000) return res.status(400).json({ error: "Cart for " + JSON.stringify(err.keyValue) + " already exists" });
        if (err.name === "ValidationError") {

            const message = Object.values(err.errors).map(value => value.message);
            return res.status(400).json({
                error: message
            })
        }
        res.status(500).json();
    }

};




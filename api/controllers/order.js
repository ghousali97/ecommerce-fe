const Order = require('../models/Order');
const Product = require('../models/Order');

module.exports.updateOrder = async (req, res) => {
    const orderId = req.params.orderId;

    try {
        const updatedOrder = await Order.findByIdAndUpdate(orderId, {
            $set: req.body
        }, { new: true });

        if (updatedOrder) return res.status(200).json(updatedOrder);
        return res.status(404).json({ message: 'Order ' + orderId + ' not found' });
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

module.exports.deleteOrder = async (req, res) => {

    var orderId = req.params.orderId;

    try {
        const deletedOrder = await Order.findByIdAndDelete(orderId);
        if (deletedOrder) return res.status(204).json();
        return res.status(404).json({ message: 'Order ' + orderId + ' not found' });

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }

};

module.exports.getOrder = async (req, res) => {
    var orderId = req.params.orderId;

    try {
        const order = await Order.findById(orderId);
        if (order) {

            return res.json(order);
        }


        return res.status(404).json({ message: 'Order ' + orderId + ' not found' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
};


module.exports.getAllOrders = async (req, res) => {

    try {

        orders = await Order.find();


        res.status(200).json(orders);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports.createOrder = async (req, res) => {

    if (!req.user.isAdmin) {
        req.body.userId = req.user.id;
        req.body.status = "pending";
    }

    const newOrder = new Order(req.body);


    try {
        const result = await newOrder.save();
        return res.status(201).json(result);

    }
    catch (err) {
        if (err.code === 11000) return res.status(400).json({ error: "Order for " + JSON.stringify(err.keyValue) + " already exists" });
        if (err.name === "ValidationError") {

            const message = Object.values(err.errors).map(value => value.message);
            return res.status(400).json({
                error: message
            })
        }
        res.status(500).json();
    }


};

module.exports.getIncome = async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([{
            $match: { createdAt: { $gte: previousMonth } }
        },
        {
            $project: {
                month: { $month: "$createdAt" },
                sale: "$amount"
            }

        }, {
            $group: {
                _id: "$month",
                total: { $sum: "$sale" }
            }
        }]);
        res.status(200).json(income);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }

    // try {
    //     const data = await User.aggregate([
    //         { $match: { createdAt: { $gte: lastYear } } },
    //         {
    //             $project: {
    //                 month: { $month: "$createdAt" },
    //             },
    //         },
    //         {
    //             $group: {
    //                 _id: "$month",
    //                 total: { $sum: { $am } },
    //             },
    //         },
    //     ]);
    //     res.status(200).json(data)
    // } catch (err) {
    //     console.log(err);
    //     res.status(500).json(err);
    // }

};



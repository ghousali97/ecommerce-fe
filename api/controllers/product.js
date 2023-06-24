const Product = require('../models/Product');

module.exports.updateProduct = async (req, res) => {
    const productId = req.params.productId;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, {
            $set: req.body
        }, { new: true });

        if (updatedProduct) return res.status(200).json(updatedProduct);
        return res.status(404).json({ message: 'product not found' });
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

module.exports.deleteProduct = async (req, res) => {

    var productId = req.params.productId;

    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (deletedProduct) return res.status(204).json();
        return res.status(404).json({ message: "Product doesn't exist" });

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }

};

module.exports.getProduct = async (req, res) => {
    var productId = req.params.productId;

    try {
        const product = await Product.findById(productId);
        if (product) {

            return res.json(product);
        }


        return res.status(404).json({ message: "Product doesn't exist" });
    }
    catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};


module.exports.getAllProducts = async (req, res) => {


    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5);
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                },
            });
        } else {
            products = await Product.find();
        }

        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports.createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    console.log(req.body);

    try {
        const result = await newProduct.save();
        return res.status(201).json(result);

    }
    catch (err) {
        if (err.code === 11000) return res.status(400).json({ error: JSON.stringify(err.keyValue) + " already exists" });
        if (err.name === "ValidationError") {

            const message = Object.values(err.errors).map(value => value.message);
            return res.status(400).json({
                error: message
            })
        }
        res.status(500).json();
    }

};

// module.exports.getStats = async (req, res) => {
//     console.log(req.url);
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//     try {
//         const data = await User.aggregate([
//             { $match: { createdAt: { $gte: lastYear } } },
//             {
//                 $project: {
//                     month: { $month: "$createdAt" },
//                 },
//             },
//             {
//                 $group: {
//                     _id: "$month",
//                     total: { $sum: 1 },
//                 },
//             },
//         ]);
//         res.status(200).json(data)
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }

// };


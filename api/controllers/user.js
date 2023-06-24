const User = require('../models/User');





module.exports.updateUser = async (req, res) => {
    const userId = req.params.userId;
    if (req.body.username || req.body.email) {
        return res.status(400).json({ message: "Username and Email can't be modified" });
    }

    if (req.body.password) {
        var password = req.body.password;
        var saltHash = passwordUtils.generatePassword(password);
        req.body.salt = saltHash.salt;
        req.body.hash = saltHash.hash;
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, {
            $set: req.body
        }, { new: true });

        if (updatedUser) return res.status(204).json();
        return res.status(404).json({ message: 'user not found' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

};

module.exports.deleteUser = async (req, res) => {

    var userId = req.params.userId;

    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (deletedUser) return res.status(204).json();
        return res.status(404).json({ message: "User doesn't exist" });

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }

};

module.exports.getUser = async (req, res) => {
    var userId = req.params.userId;

    try {
        const user = await User.findById(userId);
        if (user) {
            const { salt, hash, ...others } = user._doc;
            return res.json(others);
        }


        return res.status(404).json({ message: "User doesn't exist" });
    }
    catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports.getAllUsers = async (req, res) => {

    try {
        const users = await User.find({});
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports.getStats = async (req, res) => {
    console.log(req.url);
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

};


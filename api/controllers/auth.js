const User = require('../models/User');
const passwordUtils = require('../utils/password')



module.exports.register = (req, res) => {

    var username = req.body.username;
    var email = req.body.email;
    var fname = req.body.fname;
    var lname = req.body.lname;
    var password = req.body.password;

    var saltHash = passwordUtils.generatePassword(password);

    if (!username || !email || !fname || !password) {
        return res.status(400).send({ message: "missing parameters" });
    }

    const newUser = lname ? new User({
        username,
        email,
        fname,
        lname,
        salt: saltHash.salt,
        hash: saltHash.hash
    }) : new User({
        username,
        email,
        fname,
        salt: saltHash.salt,
        hash: saltHash.hash
    });

    newUser.save().then((message) => {
        res.status(201).json({ message: message });
    }).catch((err) => {
        if (err.code === 11000) {
            return res.status(400).json({ message: JSON.stringify(err.keyValue) + " already exists" });
        };
        return res.status(500).json({ message: 'Internal server error' });
    })

};


module.exports.login = async (req, res) => {
    var username = req.body.username;
    var password = req.body.password;



    if (!username || !password) {
        return res.status(400).send({ message: "missing parameters" });
    }

    var foundUser = await User.findOne({ username: username });
    if (!foundUser) {
        return res.status(401).json({ message: 'Incorrect username or password' });
    }
    const validPassword = passwordUtils.validatePassword(password, foundUser.hash, foundUser.salt);

    if (!validPassword) {
        return res.status(401).json({ message: 'Incorrect username or password' });
    }
    const token = passwordUtils.issueJwt(foundUser);
    res.status(200).send(token);
}




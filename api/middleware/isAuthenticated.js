const passwordUtils = require('../utils/password');

const isAuthenticated = (req, res, next) => {
    const token = req.headers['x-auth-token'];
    if (!token) return res.status(401).json();
    try {
        const payload = passwordUtils.verifyJwt(token);
        const user = { id: payload.sub, username: payload.username, isAdmin: payload.isAdmin };
        req.user = user;
        next();
    } catch (err) {
        console.log(err);
        return res.status(403).json({ message: "Invalid or expired token" });
    };

};


const isAuthorised = (req, res, next) => {
    isAuthenticated(req, res, () => {
        var userId = req.params.userId;
        console.log('ID from params:' + userId);
        if (req.user.isAdmin || req.user.id === userId) return next();

        return res.status(401).json();

    });
}
const isAdmin = (req, res, next) => {
    isAuthenticated(req, res, () => {

        if (req.user && req.user.isAdmin) return next();

        if (req.user) return res.status(403).json();

        return res.status(401).json();

    });
}
module.exports = { isAuthenticated, isAdmin, isAuthorised };
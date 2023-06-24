const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        username: { type: String, required: true, unique: true },
        fname: { type: String, required: true },
        lname: { type: String },
        hash: {
            type: String, required: true
        },
        salt: {
            type: String, required: true
        },
        isAdmin: {
            type: Boolean, default: false
        }
    },
    {
        timestamps: true
    }
);


const User = mongoose.model('user', userSchema);

module.exports = User;
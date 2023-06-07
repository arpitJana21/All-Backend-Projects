const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    pass: {
        type: String,
        required: true,
    },
}, 
{
    versionKey: false
});

const UserModel = mongoose.model('user', userSchema);
module.exports = {UserModel};
const mongoose = require('mongoose');

const blacklistSchema = mongoose.Schema({
    token: {type: String, required: true, unique: true}
},{
    versionKey: false
});

const BlacklistModel = mongoose.model('token', blacklistSchema);
module.exports = {BlacklistModel};
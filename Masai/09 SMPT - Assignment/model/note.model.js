const mongoose = require('mongoose');

const noteSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        userID: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            require: true,
        },
    },
    {
        versionKey: false,
    }
);

const NoteModel = mongoose.model('note', noteSchema);
module.exports = {NoteModel};

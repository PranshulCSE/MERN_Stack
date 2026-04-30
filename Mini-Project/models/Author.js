const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        biography: {
            type: String,
            trim: true,
        },
        birthDate: {
            type: Date,
        },
    },
);

module.exports = mongoose.model('Author', authorSchema);

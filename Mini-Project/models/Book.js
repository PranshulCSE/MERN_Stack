const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        isbn: {
            type: String,
            required: true,
            unique: true,
        },
        genre: {
            type: String,
            required: true,
            trim: true,
        },
        publishedDate: {
            type: Date,
        },
        price: {
            type: Number,
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Author',
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);

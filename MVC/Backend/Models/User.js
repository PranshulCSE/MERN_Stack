// User Model - Defines the structure of user documents in MongoDB
const mongoose = require('mongoose');

// Create User Schema
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name'],
            trim: true,
            minlength: 3
        },
        email: {
            type: String,
            required: [true, 'Please provide an email'],
            unique: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please provide a valid email'
            ]
        },
        phone: {
            type: String,
            required: [true, 'Please provide a phone number'],
            minlength: 10
        },
        age: {
            type: Number,
            min: 18,
            max: 120
        },
        city: {
            type: String,
            trim: true
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true // Adds createdAt and updatedAt automatically
    }
);

// Create and Export User Model
module.exports = mongoose.model('User', userSchema);

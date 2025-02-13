const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    age: {
        type: Number,
        required: [true, 'Age is required']
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema,'userx'); // Model name, Schema, Collection name

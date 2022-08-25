const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 3,
        },
        name: {
            type: String,
            required: true,
            max: 50,
        }
    },
    {collection: 'users'}
);

module.exports = mongoose.model('User', UserSchema);
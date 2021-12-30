const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EditProfileSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        max: 30
    },
    email: String,
    password: Number
});

module.exports = mongoose.model('Edit', EditProfileSchema);
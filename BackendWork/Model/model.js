const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const userSchema = new Schema({
    username: {
        required: true,
        unique: true,
        type: String,
        min: 4
    },
    email: {
        required: true,
        unique: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    }
})

const User = model("users", userSchema);
module.exports = User;
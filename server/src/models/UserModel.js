const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    number: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Contact schema
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);
const Contact = mongoose.model("Contact", contactSchema);

module.exports = { User, Contact };

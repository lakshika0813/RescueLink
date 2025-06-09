const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models/UserModel');

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
    const { firstname, lastname, contact, password, confirm_password } = req.body;

    if (!firstname || !lastname || !contact || !password || !confirm_password) {
        return res.status(400).send("All fields are required.");
    }

    if (password !== confirm_password) {
        return res.status(400).send("Passwords do not match.");
    }

    try {
        const existingUser = await User.findOne({ number: contact });
        if (existingUser) {
            return res.status(400).send("User already exists.");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstname,
            lastname,
            number: contact,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).send("Account created");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating account.");
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { contact, password } = req.body;

    if (!contact || !password) {
        return res.status(400).send("All fields are required.");
    }

    try {
        const user = await User.findOne({ number: contact });
        if (!user) return res.status(404).send("User not found.");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).send("Incorrect password.");

        res.status(200).send("Login successful");
    } catch (error) {
        console.error(error);
        res.status(500).send("Login failed.");
    }
});

module.exports = router;

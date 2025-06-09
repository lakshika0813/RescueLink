const express = require('express');
const { Contact } = require('../models/UserModel');

const router = express.Router();

// Get all contacts
router.get('/customFamilyContacts', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to fetch contacts.");
    }
});

// Add a new contact
router.post('/addContact', async (req, res) => {
    const { name, number } = req.body;

    if (!name || !number) {
        return res.status(400).send("Name and number are required.");
    }

    try {
        const newContact = new Contact({ name, number });
        await newContact.save();
        res.status(201).send("Contact added successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding contact.");
    }
});

module.exports = router;

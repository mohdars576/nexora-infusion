// server/routes/contact.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/contact');

// Submit contact form
router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    
    // Send email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${contact.name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${contact.phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${contact.company || 'Not provided'}</p>
        <p><strong>Service:</strong> ${contact.service || 'Not specified'}</p>
        <p><strong>Message:</strong> ${contact.message}</p>
      `,
    };
    
    await transporter.sendMail(mailOptions);
    
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all contacts (admin only)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
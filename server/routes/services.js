// server/routes/services.js
const express = require('express');
const router = express.Router();
const Service = require('../models/service');

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find({ isActive: true }).sort({ createdAt: -1 });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create service (admin only)
router.post('/', async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
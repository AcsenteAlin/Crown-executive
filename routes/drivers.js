const express = require('express');
const router = express.Router();

// Sample data for drivers
let drivers = [];

// Get all drivers
router.get('/', (req, res) => {
    res.json(drivers);
});

// Add a new driver
router.post('/', (req, res) => {
    const driver = req.body;
    drivers.push(driver);
    res.status(201).json(driver);
});

// Get a driver by ID
router.get('/:id', (req, res) => {
    const driver = drivers.find(d => d.id === parseInt(req.params.id));
    if (!driver) return res.status(404).send('Driver not found');
    res.json(driver);
});

// Update a driver by ID
router.put('/:id', (req, res) => {
    const driver = drivers.find(d => d.id === parseInt(req.params.id));
    if (!driver) return res.status(404).send('Driver not found');
    Object.assign(driver, req.body);
    res.json(driver);
});

// Delete a driver by ID
router.delete('/:id', (req, res) => {
    const driverIndex = drivers.findIndex(d => d.id === parseInt(req.params.id));
    if (driverIndex === -1) return res.status(404).send('Driver not found');
    drivers.splice(driverIndex, 1);
    res.status(204).send();
});

module.exports = router;
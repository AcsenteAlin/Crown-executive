const express = require('express');
const router = express.Router();

// Mock data for rides
let rides = [];

// Endpoint to book a ride
router.post('/book', (req, res) => {
    const { userId, pickupLocation, dropoffLocation } = req.body;
    const ride = { id: rides.length + 1, userId, pickupLocation, dropoffLocation, status: 'booked' };
    rides.push(ride);
    res.status(201).json(ride);
});

// Endpoint to track a ride
router.get('/track/:id', (req, res) => {
    const rideId = parseInt(req.params.id);
    const ride = rides.find(r => r.id === rideId);
    if (ride) {
        res.json(ride);
    } else {
        res.status(404).json({ message: 'Ride not found' });
    }
});

module.exports = router;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rideSchema = new Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Customer'
    },
    driverId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Driver'
    },
    pickupLocation: {
        type: { type: String, enum: ['Point'], required: true },
        coordinates: { type: [Number], required: true }
    },
    dropoffLocation: {
        type: { type: String, enum: ['Point'], required: true },
        coordinates: { type: [Number], required: true }
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed', 'canceled'],
        default: 'pending'
    },
    fare: {
        type: Number,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

rideSchema.index({ pickupLocation: '2dsphere', dropoffLocation: '2dsphere' });

module.exports = mongoose.model('Ride', rideSchema);
const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    licenseDetails: {
        type: String,
        required: true
    },
    vehicleInformation: {
        type: String,
        required: true
    },
    availabilityStatus: {
        type: Boolean,
        default: true
    },
    currentLocation: {
        type: { type: String, enum: ['Point'], required: true },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    earningsTracking: {
        type: Number,
        default: 0
    }
},{
    timestamps: true
});

DriverSchema.index({ currentLocation: '2dsphere' });

const Driver = mongoose.model('Driver', DriverSchema);

module.exports = Driver;
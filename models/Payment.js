const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    rideId: { type: String, required: true },
    customerId: { type: String, required: true },
    driverId: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    status: { type: String, required: true },
    transactionId: { type: String, required: true }
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
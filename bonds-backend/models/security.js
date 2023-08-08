const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const securitySchema = new Schema({
        ISIN: {
            type: String,
            required: true
        },
        issuer: {
            type: String,
            required: true
        },
        maturityDate: {
            type: Date,
            required: true
        },
        coupon: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        faceValue: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Security', securitySchema);
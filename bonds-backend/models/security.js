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
        MaturityDate: {
            type: date,
            required: true
        },
        coupon: {
            type: double,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        FaceValue: {
            type: double,
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

module.exports = mongoose.model('security', securitySchema);
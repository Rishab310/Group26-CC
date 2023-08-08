const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradeSchema = new Schema({
        counterpartyId: {
            type: Schema.Types.ObjectId,
            ref: 'Counterparty',
            required: true
        },
        bookId: {
            type: Schema.Types.ObjectId,
            ref: 'Book',
            required: true
        },
        status: {
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        buy_sell:{
            type: String,
            required: true
        },
        tradeDate:{
            type: String,
            required: true
        },
        settlementDate:{
            type: Date,
            // required: true
        },
        quantity:{
            type: Number,
            required: true
        },
        securityId: {
            type: Schema.Types.ObjectId,
            ref: 'Security',
            required: true
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Trade', tradeSchema);
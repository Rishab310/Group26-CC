const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradeSchema = new Schema({
        CounterpartyId: {
            type: Schema.Types.ObjectId,
            ref: 'Counterparty',
            required: true
        },
        bookId: {
            type: Schema.Types.ObjectId,
            ref: 'book',
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
        Buy_sell:{
            type:String,
            required:true
        },
        TradeDate:{
            type:String,
            required:true
        },
        SettlementDate:{
            type:Date,
            required:true
        },
        Quantity:{
            type:Number,
            required
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('trade', userSchema);
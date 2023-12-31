const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const counterpartySchema = new Schema({
    name: {
        type: String,
        required: true
    },
},
    {
        timestamps: true,
        usePushEach: true
    }
)

module.exports = mongoose.model('Counterparty', counterpartySchema);
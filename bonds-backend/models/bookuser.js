const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookuserSchema = new Schema({
        bookid: {
            type: Schema.Types.ObjectId,
            ref: 'book',
            required: true,
        },
        userid: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('bookuser', bookuserSchema);
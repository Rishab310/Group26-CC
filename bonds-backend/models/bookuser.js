const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookUserSchema = new Schema({
        bookId: {
            type: Schema.Types.ObjectId,
            ref: 'Book',
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('BookUser', bookUserSchema);
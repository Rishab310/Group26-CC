const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
        bookname: {
            type: String,
            required: true
        },
        bookid: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Books', bookSchema);
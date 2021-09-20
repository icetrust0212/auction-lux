const mongoose = require("mongoose");

const Comment = mongoose.model(
    "Comment",
    new mongoose.Schema({
        auction_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Auction',
            required: true
        },
        author_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    }, {
        timestamps: true
    })
);

module.exports = Comment;
const mongoose = require("mongoose");

const Bid = mongoose.model(
    "Bid",
    new mongoose.Schema({
        auction_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Auction',
            required: true
        },
        bidder_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        entries_count: {
            type: Number,
            required: true,
        },
    }, {
        timestamps: true
    })
);

module.exports = Bid;
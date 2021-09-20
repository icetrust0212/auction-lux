const mongoose = require("mongoose");

const Auction = mongoose.model(
    "Auction",
    new mongoose.Schema({
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        start_time: {
            type: Date,
            required: true
        },
        end_time: {
            type: Date,
            required: true
        },
        required_entry_count: {
            type: Number,
            default: 10 
        },
        number_of_chairs_allowed: {
            type: Number,
        },
        increment_in_price_per_bid: {
            type: Number,
            default: 1
        },
        increment_in_time_per_bid: {
            type: Number,
            default: 10
        },
        ship_price: {
            type: Number,
        },
        ship_date: {
            type: Date,
        },
    }, {
        timestamps: true,
    })
);

module.exports = Auction;
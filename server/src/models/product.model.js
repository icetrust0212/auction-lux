const mongoose = require("mongoose");

const Product = mongoose.model(
    "Product",
    new mongoose.Schema({
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ProductCategory",
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: String,
        status: Number,
        vendorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        base_price: {
            type: Number,
            required: true
        },
        photo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Photo',
            required: true
        },
        thumbnails: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Photo'
        }],
    }, {
        timestamps: true,
    })
);

module.exports = Product;
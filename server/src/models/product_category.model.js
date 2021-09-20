const mongoose = require("mongoose");

const ProductCategory = mongoose.model(
    "ProductCategory",
    new mongoose.Schema({
        title: {
            type: String,
            unique: true,
            required: true
        },
        description: {
            type: String
        },
    },{
        timestamps: true
    })
);

module.exports = ProductCategory;
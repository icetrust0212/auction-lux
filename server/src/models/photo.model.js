const mongoose = require("mongoose");

const Photo = mongoose.model(
    "Photo",
    new mongoose.Schema({
        photo_url: {
            type: String,
            required: true,
        },
    }, {
        timestamps: true
    })
);

module.exports = Photo;
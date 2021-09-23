const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    birthdate: mongoose.Schema.Types.Date,
    address_country: {
      type: String,
    },
    address_state: String,
    address_city: String,
    address_street: String,
    postalcode: String,
    phonenumber: String,
    avatarImage: {
      data: Buffer,
      contentType: String
    }  ,
    roles: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: true
    }]
  }, {
    timestamps: true,
  })
);

module.exports = User;
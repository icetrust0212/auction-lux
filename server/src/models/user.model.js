const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    birthdate: mongoose.Schema.Types.Date,
    address_country: String,
    address_state: String,
    address_city: String,
    address_street: String,
    postalcode: String,
    phonenumber: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  }, {
    timestamps: true,
  })
);

module.exports = User;
const mongoose = require("mongoose");

module.exports = mongoose.model(
  "votecredits",
  new mongoose.Schema({
    User: String,
    Credits: Number,
    Unlimited: Boolean,
  })
);

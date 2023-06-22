const mongoose = require("mongoose");

module.exports = mongoose.model(
  "economy",
  new mongoose.Schema({
    Guild: String,
    User: String,
    Money: Number,
    Bank: Number,
  })
);

const mongoose = require("mongoose");

module.exports = mongoose.model(
  "messageRewards",
  new mongoose.Schema({
    Guild: String,
    Messages: Number,
    Role: String,
  })
);

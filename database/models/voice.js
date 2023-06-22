const mongoose = require("mongoose");

module.exports = mongoose.model(
  "voice",
  new mongoose.Schema({
    Guild: String,
    Category: String,
    Channel: String,
    ChannelName: String,
    ChannelCount: { type: Number, default: 0 },
  })
);

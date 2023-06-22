const mongoose = require("mongoose");

module.exports = mongoose.model(
  "privatechannels",
  new mongoose.Schema({
    Guild: String,
    Category: String,
    ChannelName: String,
    ChannelCount: { type: Number, default: 0 },
  })
);

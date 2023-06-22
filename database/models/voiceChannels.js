const mongoose = require("mongoose");

module.exports = mongoose.model(
  "voiceChannels",
  new mongoose.Schema({
    Guild: String,
    Channel: String,
  })
);

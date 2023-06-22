const mongoose = require("mongoose");

module.exports = mongoose.model(
  "starboardChannels",
  new mongoose.Schema({
    Guild: String,
    Channel: String,
  })
);

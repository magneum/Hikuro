const mongoose = require("mongoose");

module.exports = mongoose.model(
  "welcomeChannels",
  new mongoose.Schema({
    Guild: String,
    Channel: String,
  })
);

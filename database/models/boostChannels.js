const mongoose = require("mongoose");

module.exports = mongoose.model(
  "boostChannels",
  new mongoose.Schema({
    Guild: String,
    Channel: String,
  })
);

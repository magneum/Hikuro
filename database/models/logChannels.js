const mongoose = require("mongoose");

module.exports = mongoose.model(
  "logChannels",
  new mongoose.Schema({
    Guild: String,
    Channel: String,
  })
);

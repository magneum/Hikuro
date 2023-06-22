const mongoose = require("mongoose");

module.exports = mongoose.model(
  "reviewChannels",
  new mongoose.Schema({
    Guild: String,
    Channel: String,
  })
);

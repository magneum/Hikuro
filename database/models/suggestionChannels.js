const mongoose = require("mongoose");

module.exports = mongoose.model(
  "suggestionChannels",
  new mongoose.Schema({
    Guild: String,
    Channel: String,
  })
);

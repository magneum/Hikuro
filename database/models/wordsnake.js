const mongoose = require("mongoose");

module.exports = mongoose.model(
  "wordsnake",
  new mongoose.Schema({
    Guild: String,
    Channel: String,
    lastWord: String,
  })
);

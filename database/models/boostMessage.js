const mongoose = require("mongoose");

module.exports = mongoose.model(
  "boostMessage",
  new mongoose.Schema({
    Guild: String,
    boostMessage: String,
    unboostMessage: String,
  })
);

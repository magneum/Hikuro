const mongoose = require("mongoose");

module.exports = mongoose.model(
  "afk",
  new mongoose.Schema({
    Guild: String,
    User: String,
    Message: { type: String, default: false },
  })
);

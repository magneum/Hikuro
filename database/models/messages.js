const mongoose = require("mongoose");

module.exports = mongoose.model(
  "messages",
  new mongoose.Schema({
    Guild: String,
    User: String,
    Messages: Number,
  })
);

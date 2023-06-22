const mongoose = require("mongoose");

module.exports = mongoose.model(
  "warnings",
  new mongoose.Schema({
    Guild: String,
    User: String,
    Warnings: [Object],
  })
);

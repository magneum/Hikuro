const mongoose = require("mongoose");

module.exports = mongoose.model(
  "warnCase",
  new mongoose.Schema({
    Guild: String,
    Case: Number,
  })
);

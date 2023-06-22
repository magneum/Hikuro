const mongoose = require("mongoose");

module.exports = mongoose.model(
  "radios",
  new mongoose.Schema({
    Guild: String,
    Name: String,
    Url: String,
  })
);

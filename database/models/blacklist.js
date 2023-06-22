const mongoose = require("mongoose");

module.exports = mongoose.model(
  "blacklist-words",
  new mongoose.Schema({
    Guild: String,
    Words: Array,
  })
);

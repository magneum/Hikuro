const mongoose = require("mongoose");

module.exports = mongoose.model(
  "birthday",
  new mongoose.Schema({
    Guild: String,
    User: String,
    Birthday: String,
  })
);

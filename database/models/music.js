const mongoose = require("mongoose");

module.exports = mongoose.model(
  "music",
  new mongoose.Schema({
    Guild: String,
    Channel: String,
  })
);

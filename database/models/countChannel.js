const mongoose = require("mongoose");

module.exports = mongoose.model(
  "countChannel",
  new mongoose.Schema({
    Guild: String,
    Channel: String,
    Mode: { type: String, default: "hard" },
  })
);

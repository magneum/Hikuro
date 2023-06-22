const mongoose = require("mongoose");

module.exports = mongoose.model(
  "customCommandsAdvanced",
  new mongoose.Schema({
    Guild: String,
    Name: String,
    Responce: String,
    Action: { type: String, default: "Normal" },
  })
);

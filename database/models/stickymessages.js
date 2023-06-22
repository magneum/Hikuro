const mongoose = require("mongoose");

module.exports = mongoose.model(
  "stickymessages",
  new mongoose.Schema({
    Guild: String,
    Channel: String,
    Content: String,
    LastMessage: String,
  })
);

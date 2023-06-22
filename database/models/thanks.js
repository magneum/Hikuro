const mongoose = require("mongoose");

module.exports = mongoose.model(
  "thanks",
  new mongoose.Schema({
    User: String,
    UserTag: String,
    Received: Number,
  })
);

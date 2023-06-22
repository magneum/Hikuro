const mongoose = require("mongoose");

module.exports = mongoose.model(
  "reminder",
  new mongoose.Schema({
    User: String,
    Text: String,
    endTime: Number,
  })
);

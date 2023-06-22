const mongoose = require("mongoose");

module.exports = mongoose.model(
  "badges",
  new mongoose.Schema({
    User: { type: String },
    FLAGS: { type: Array },
  })
);

const mongoose = require("mongoose");

module.exports = mongoose.model(
  "family",
  new mongoose.Schema({
    Guild: String,
    User: String,
    Parent: { type: Array, default: null },
    Partner: { type: String, default: null },
    Children: { type: Array, default: null },
  })
);

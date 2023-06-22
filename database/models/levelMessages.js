const mongoose = require("mongoose");

module.exports = mongoose.model(
  "levelmessage",
  new mongoose.Schema({
    Guild: String,
    Message: String,
  })
);

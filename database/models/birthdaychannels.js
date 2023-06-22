const mongoose = require("mongoose");

module.exports = mongoose.model(
  "birthdaychannels",
  new mongoose.Schema({
    Guild: String,
    Channel: String,
  })
);

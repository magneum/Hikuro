const mongoose = require("mongoose");

module.exports = mongoose.model(
  "tempban",
  new mongoose.Schema({
    guildId: String,
    userId: String,
    expires: Date,
  })
);

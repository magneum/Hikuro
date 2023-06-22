const mongoose = require("mongoose");

module.exports = mongoose.model(
  "inviteRewards",
  new mongoose.Schema({
    Guild: String,
    Invites: Number,
    Role: String,
  })
);

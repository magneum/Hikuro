const mongoose = require("mongoose");

module.exports = mongoose.model(
  "inviteMessages",
  new mongoose.Schema({
    Guild: String,
    inviteJoin: String,
    inviteLeave: String,
  })
);

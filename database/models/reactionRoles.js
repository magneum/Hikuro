const mongoose = require("mongoose");

module.exports = mongoose.model(
  "reactionRoles",
  new mongoose.Schema({
    Guild: String,
    Message: String,
    Category: String,
    Roles: Object,
  })
);

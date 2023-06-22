const mongoose = require("mongoose");

module.exports = mongoose.model(
  "userBans",
  new mongoose.Schema({
    User: String,
  })
);

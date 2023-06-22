const mongoose = require("mongoose");

module.exports = mongoose.model(
  "verify",
  new mongoose.Schema({
    Guild: String,
    Channel: String,
    Role: String,
    Logs: String,
  })
);

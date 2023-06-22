const mongoose = require("mongoose");

module.exports = mongoose.model(
  "tickets",
  new mongoose.Schema({
    Guild: String,
    Category: String,
    Role: String,
    Channel: String,
    Logs: String,
    TicketCount: { type: Number, default: 0 },
  })
);

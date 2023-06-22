const mongoose = require("mongoose");

module.exports = mongoose.model(
  "ticketMessage",
  new mongoose.Schema({
    Guild: String,
    openTicket: String,
    dmMessage: String,
  })
);

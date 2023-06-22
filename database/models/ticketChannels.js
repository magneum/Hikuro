const mongoose = require("mongoose");

module.exports = mongoose.model(
  "ticketChannels",
  new mongoose.Schema({
    Guild: String,
    TicketID: Number,
    channelID: String,
    creator: String,
    claimed: String,
    resolved: { type: Boolean, default: false },
  })
);

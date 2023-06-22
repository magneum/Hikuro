const mango = require("mongoose");
const path = require("path");

module.exports = mango.model(
  path.basename(__filename, path.extname(__filename)),
  new mango.Schema({
    Guild: String,
    TicketID: Number,
    channelID: String,
    creator: String,
    claimed: String,
    resolved: { type: Boolean, default: false },
  })
);

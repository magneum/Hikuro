const mango = require("mongoose");
const path = require("path");

module.exports = mango.model(
  path.basename(__filename, path.extname(__filename)),
  new mango.Schema({
    Guild: String,
    Category: String,
    Role: String,
    Channel: String,
    Logs: String,
    TicketCount: { type: Number, default: 0 },
  })
);

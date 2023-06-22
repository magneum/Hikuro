const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Levels",
  new mongoose.Schema({
    userID: { type: String },
    guildID: { type: String },
    xp: { type: Number, default: 0 },
    level: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: new Date() },
  })
);

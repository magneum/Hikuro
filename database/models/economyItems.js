const mongoose = require("mongoose");


module.exports = mongoose.model("economyItems", new mongoose.Schema({
  Guild: String,
  User: String,
  FishingRod: { type: Boolean, default: false },
  FishingRodUsage: { type: Number, default: 0 },
}));

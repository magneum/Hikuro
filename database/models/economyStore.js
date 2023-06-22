const mongoose = require("mongoose");


module.exports = mongoose.model("economyStore", new mongoose.Schema({
  Guild: String,
  Role: String,
  Amount: Number,
}));

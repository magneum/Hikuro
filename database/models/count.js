const mongoose = require("mongoose");


module.exports = mongoose.model("count", new mongoose.Schema({
  Guild: String,
  User: String,
  Count: Number,
}));

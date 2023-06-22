const mongoose = require("mongoose");


module.exports = mongoose.model("customCommands", new mongoose.Schema({
  Guild: String,
  Name: String,
  Responce: String,
}));

const mongoose = require("mongoose");


module.exports = mongoose.model("chatbot", new mongoose.Schema({
  Guild: String,
  Channel: String,
}));

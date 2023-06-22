const mongoose = require("mongoose");


module.exports = mongoose.model("channellist", new mongoose.Schema({
  Guild: String,
  Channels: Array,
}));

const mongoose = require("mongoose");


module.exports = mongoose.model("developers",  new mongoose.Schema({
  Action: String,
  Date: String,
}));

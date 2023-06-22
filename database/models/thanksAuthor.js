const mongoose = require("mongoose");

module.exports = mongoose.model(
  "thanksAuthor",
  new mongoose.Schema({
    User: String,
    Author: String,
  })
);

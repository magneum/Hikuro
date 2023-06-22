const mongoose = require('mongoose');


module.exports = mongoose.model("guessNumber", new mongoose.Schema({
    Guild: String,
    Channel: String,
    Number: { type: String, default: "5126" },
}));
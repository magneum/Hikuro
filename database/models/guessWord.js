const mongoose = require('mongoose');


module.exports = mongoose.model("guessWord", new mongoose.Schema({
    Guild: String,
    Channel: String,
    Word: { type: String, default: "start" },
}));
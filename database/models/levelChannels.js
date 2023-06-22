const mongoose = require('mongoose');


module.exports = mongoose.model("levelChannels", new mongoose.Schema({
    Guild: String,
    Channel: String,
}));
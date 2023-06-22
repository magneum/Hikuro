const mongoose = require('mongoose');


module.exports = mongoose.model("leaveChannels", new mongoose.Schema({
    Guild: String,
    Channel: String,
}));
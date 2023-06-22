const mongoose = require('mongoose');


module.exports = mongoose.model("levelRewards", new mongoose.Schema({
    Guild: String,
    Level: Number,
    Role: String,
}));
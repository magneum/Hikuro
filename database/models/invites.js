const mongoose = require('mongoose');


module.exports = mongoose.model("invites", new mongoose.Schema({
    Guild: String,
    User: String,
    Invites: Number,
    Total: Number,
    Left: Number
}));
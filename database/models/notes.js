const mongoose = require('mongoose');


module.exports = mongoose.model("notes", new mongoose.Schema({
    Guild: String,
    User: String,
    Code: String,
    Note: String
}));
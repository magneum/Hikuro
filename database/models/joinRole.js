const mongoose = require('mongoose');


module.exports = mongoose.model("joinRole", new mongoose.Schema({
    Guild: String,
    Role: String,
}));
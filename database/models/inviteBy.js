const mongoose = require('mongoose');


module.exports = mongoose.model("inviteBy", new mongoose.Schema({
    Guild: String,
    inviteUser: String,
    User: String,
}));
const mongoose = require("mongoose");

const StatusSchema = new mongoose.Schema({
}, {strict: 'false'});

module.exports = mongoose.model("Status", StatusSchema);
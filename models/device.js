const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
}, {strict: 'false'});

module.exports = mongoose.model("Device", DeviceSchema);
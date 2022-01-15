const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
}, {strict: 'false'}, {collection : 'devices'});

module.exports = mongoose.model("device", DeviceSchema, 'devices');

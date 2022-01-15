const Device = require('../models/device');
const { connect } = require("mongoose");
const connectDB = require("../db/connect");

const getDeviceData = async (req, res) => {
  try {
    const url = req.body;
    connectDB(url);
    const collection1 = req.params.collection1;
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getDeviceData };

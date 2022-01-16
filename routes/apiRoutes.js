const express = require("express");
const { getLatitudeLongitude } = require("../controllers/geocodings");
const {
    getDeviceAndStatusData
  } = require("../controllers/tests");

const router = express.Router();

router.route("/").get((req, res) => {
  res.send('Welcome to the server!')
}).post(getLatitudeLongitude);
router.route("/:collection1").post(getDeviceAndStatusData);


module.exports = router;
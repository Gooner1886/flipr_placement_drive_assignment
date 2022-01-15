const express = require("express");
const {
    getLatitudeLongitude
  } = require("../controllers/geocodings");

const router = express.Router();

router.route("/").post(getLatitudeLongitude);

module.exports = router;
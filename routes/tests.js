const express = require("express");
const {
    getDeviceData
  } = require("../controllers/tests");

const router = express.Router();

router.route("/:collection1").post(getDeviceData);

module.exports = router;
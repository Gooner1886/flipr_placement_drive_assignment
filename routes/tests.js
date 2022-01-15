const express = require("express");
const {
    getDeviceAndStatusData
  } = require("../controllers/tests");

const router = express.Router();

router.route("/:collection1").post(getDeviceAndStatusData);

module.exports = router;
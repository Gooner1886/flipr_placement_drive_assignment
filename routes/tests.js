const express = require("express");
const {
    getDeviceData
  } = require("../controllers/tasks");

const router = express.Router();

router.route("/:collection1").post(getDeviceData);

module.exports = router;
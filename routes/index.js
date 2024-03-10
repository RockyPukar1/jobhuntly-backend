/**
 * index.js
 * @description :: index route of platforms
 */

const express = require('express');
const router =  express.Router();

router.use("/user", require("./user"))
router.use("/verify", require("./verify"))

// router.use(require('./admin/index'));
// router.use(require('./device/v1/index'));

module.exports = router;
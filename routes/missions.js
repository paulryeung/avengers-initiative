const express = require("express");
const router = express.Router();

let missionsCtrl = require("../controllers/missions");

router.get("/", missionsCtrl.index);

module.exports = router;

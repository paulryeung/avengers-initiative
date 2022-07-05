const express = require("express");
const router = express.Router();

let missionsCtrl = require("../controllers/missions");

//missions index
router.get("/", missionsCtrl.index);

//Form to add new Mission
router.get("/new", missionsCtrl.new);

//post mission form information
router.post("/new", missionsCtrl.add);

module.exports = router;

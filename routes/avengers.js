const express = require("express");
const router = express.Router();

const avengersCtrl = require("../controllers/avengers");

router.get("/", avengersCtrl.index);

module.exports = router;

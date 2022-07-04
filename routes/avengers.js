const express = require("express");
const router = express.Router();

const avengersCtrl = require("../controllers/avengers");

//direct to new Avenger recruitment page
router.get("/new", avengersCtrl.new);

//main index
router.get("/", avengersCtrl.index);

module.exports = router;

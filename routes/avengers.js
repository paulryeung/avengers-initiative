const express = require("express");
const router = express.Router();

const avengersCtrl = require("../controllers/avengers");

//direct to new Avenger recruitment page
router.get("/new", avengersCtrl.new);

//posting form information for new Avenger
router.post("/new", avengersCtrl.add);

//main index
router.get("/", avengersCtrl.index);

module.exports = router;

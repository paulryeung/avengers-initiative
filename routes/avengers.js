const express = require("express");
const router = express.Router();

const avengersCtrl = require("../controllers/avengers");

//direct to new Avenger recruitment page
router.get("/new", avengersCtrl.new);

//posting form information for new Avenger
router.post("/new", avengersCtrl.add);

//route for deleting an avenger
router.post("/:id/delete", avengersCtrl.delete);

//edit an avenger showpage
router.get("/:id/edit", avengersCtrl.edit);

//showpage for avenger
router.get("/:id", avengersCtrl.show);

//update the avenger profile
router.put("/:id", avengersCtrl.update);

//main index
router.get("/", avengersCtrl.index);

module.exports = router;

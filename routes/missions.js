const express = require("express");
const router = express.Router();

let missionsCtrl = require("../controllers/missions");

//missions index
router.get("/", missionsCtrl.index);

//Form to add new Mission
router.get("/new", missionsCtrl.new);

//post mission form information
router.post("/new", missionsCtrl.add);

//delete a mission
router.post("/:id/delete", missionsCtrl.delete);

//edit a mission page
router.get("/:id/edit", missionsCtrl.edit);

//updating the mission with form
router.put("/:id", missionsCtrl.update);

//add avenger to missions
router.post("/:id/avengers", missionsCtrl.addToTeam);

//show mission briefing page
router.get("/:id", missionsCtrl.show);

module.exports = router;

const mission = require("../models/mission");

function index(req, res) {
  console.log("Made it here to missions index controller");
  res.render("missions/index");
}

function newMission(req, res) {
  res.render("missions/new");
}

module.exports = {
  index,
  new: newMission,
};

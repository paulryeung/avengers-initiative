const Mission = require("../models/mission");

function index(req, res) {
  console.log("Made it here to missions index controller");
  Mission.find({}, function (err, missions) {
    res.render("missions/index", { missions });
  });
}

function newMission(req, res) {
  res.render("missions/new");
}

function add(req, res) {
  console.log("made it to mission add");
  console.log(req.body);

  let newMission = Mission(req.body);

  newMission.save(function (err) {
    if (err) {
      console.log(err);
      console.log("Error adding mission, redirecting now to page again");
      return res.redirect("/missions/new");
    }
    res.redirect("/missions");
  });
}

module.exports = {
  index,
  new: newMission,
  add,
};

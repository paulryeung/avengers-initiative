const Mission = require("../models/mission");

//Index of Missions
function index(req, res) {
  console.log("Made it here to missions index controller");
  Mission.find({}, function (err, missions) {
    res.render("missions/index", { missions });
  });
}

//New mission form page
function newMission(req, res) {
  res.render("missions/new");
}

//Adding a Mission
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

//Deleting a Mission
function deleteMission(req, res) {
  console.log("made it to delete missions");
  console.log("id is currently ", req.params.id);
  Mission.deleteOne({ _id: req.params.id }, function (err) {
    if (err) {
      console.log(err);
    }
    res.redirect("/missions");
  });
}

module.exports = {
  index,
  new: newMission,
  add,
  delete: deleteMission,
};

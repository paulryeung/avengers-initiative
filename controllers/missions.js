const Mission = require("../models/mission");
const Avenger = require("../models/avenger");

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

//Show Mission Page
function show(req, res) {
  Mission.findById(req.params.id, function (err, mission) {
    //grab all the avengers too and pass it
    Avenger.find({}, function (err, avengers) {
      res.render("missions/show", { mission, avengers });
    });
  });
}

//Add Avenger to Team
function addToTeam(req, res) {
  console.log("Adding avenger to mission team");
  //find the correct mission and push avenger id into team parameter
  Mission.findById(req.params.id, function (err, mission) {
    //push avengers id into team
    //mission.team.push(req.body.avengerId);
  });
}

module.exports = {
  index,
  new: newMission,
  add,
  delete: deleteMission,
  addToTeam,
  show,
};

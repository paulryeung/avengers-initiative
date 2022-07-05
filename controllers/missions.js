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
  Mission.findById(req.params.id)
    .populate("team")
    .exec(function (err, mission) {
      //grab all the avengers too and pass it
      Avenger.find({ _id: { $nin: mission.team } }).exec(function (
        err,
        avengers
      ) {
        console.log(avengers);
        res.render("missions/show", { mission, avengers });
      });
    });
}

//Edit a Mission page
function edit(req, res) {
  //basically the same as show page, need to pass mission and avengers
  Mission.findById(req.params.id)
    .populate("team")
    .exec(function (err, mission) {
      //grab all the avengers too and pass it
      Avenger.find({ _id: { $nin: Mission.team } }).exec(function (
        err,
        avengers
      ) {
        console.log(avengers);
        res.render("missions/edit", { mission, avengers });
      });
    });
}

//Update a Mission Page
function update(req, res) {
  console.log("made it to mission update");
  console.log(req.body);

  Mission.updateOne({ _id: req.params.id }, req.body, function (err) {
    if (err) {
      console.log(err);
      console.log("Error updating mission, redirecting now to page again");
      return res.redirect(`/missions/${req.params.id}/edit`);
    }
    res.redirect(`/missions/${req.params.id}`);
  });
}

//Add Avenger to Team
function addToTeam(req, res) {
  console.log("Adding avenger to mission team");
  console.log(req.body);
  //find the correct mission and push avenger id into team parameter
  Mission.findById(req.params.id, function (err, mission) {
    //push avengers id into team
    mission.team.push(req.body.avengerId);

    //save the mission with the push
    mission.save(function (err) {
      if (err) {
        console.log("Error message: ", err);
      }
      res.redirect(`/missions/${req.params.id}`);
    });
  });
}

//Remove Avenger from Team
function removeFromTeam(req, res) {
  console.log("made it to removing member from team");
  console.log(
    "mission ID: ",
    req.params.id,
    "avenger id: ",
    req.params.avengerid
  );

  //find correct mission and splice out the Team Array
  Mission.findById(req.params.id, function (err, mission) {
    //find index of avenger
    let idx = mission.team.findIndex(
      (avenger) => avenger._id == req.params.avengerid
    );

    mission.team.splice(idx, 1);
    //now save the updated mission in database
    mission.save(function (err) {
      res.redirect(`/missions/${req.params.id}`);
    });
  });
}

module.exports = {
  index,
  new: newMission,
  add,
  delete: deleteMission,
  addToTeam,
  show,
  edit,
  update,
  removeFromTeam,
};

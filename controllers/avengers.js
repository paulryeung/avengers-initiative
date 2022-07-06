const Avenger = require("../models/avenger");
const Mission = require("../models/mission");

//main list of avengers page
function index(req, res) {
  //Grab entire list of avengers and pass it
  Avenger.find({}, function (err, avengers) {
    res.render("avengers/index", { avengers });
  });
}

//page for new avengers
function newAvenger(req, res) {
  res.render("avengers/new");
}

//adding new avenger
function add(req, res) {
  console.log("Here are form parameters", req.body);

  let abilities = [];
  //check and add if parameter isn't null
  if (req.body.ability1) {
    abilities.push(req.body.ability1);
  }
  if (req.body.ability2) {
    abilities.push(req.body.ability2);
  }
  if (req.body.ability3) {
    abilities.push(req.body.ability3);
  }
  if (req.body.ability4) {
    abilities.push(req.body.ability4);
  }

  let newParameters = {
    alias: req.body.alias,
    identity: req.body.identity,
    description: req.body.description,
    icon: req.body.icon,
    model: req.body.model,
    photo: req.body.photo,
    abilities: abilities,
  };

  console.log("Here are abilities parameter after congregation", abilities);

  let newAvenger = Avenger(newParameters);
  newAvenger.save(function (err) {
    if (err) {
      console.log(err);
      console.log("Error adding avenger, redirecting now to page again");
    }
  });

  res.redirect("/avengers");
}

//delete an avenger
function deleteAvenger(req, res) {
  Avenger.deleteOne({ _id: req.params.id }, function (err) {
    if (err) {
      console.log(err);
    }
    res.redirect("/avengers");
  });
}

//showpage for an avenger
function show(req, res) {
  Avenger.findById(req.params.id, function (err, avenger) {
    console.log(avenger);

    //Query for array of all missions that has this avengers id
    Mission.find({ team: { _id: req.params.id } }).exec(function (
      err,
      missions
    ) {
      console.log("list of missions: ", missions);

      res.render("avengers/show", { avenger, missions });
    });
  });
}

//edit an avenger page, but also need to pass missions [TO BE UPDATED LATER]
function edit(req, res) {
  console.log("Made it to edit avengers controller");

  Avenger.findById(req.params.id, function (err, avenger) {
    console.log(avenger);
    res.render("avengers/edit", { avenger });
  });
}

//Update an avenger
function update(req, res) {
  console.log("Made it to updating avenger controller");
  console.log(req.body);

  let abilities = [];
  //check and add if parameter isn't null
  if (req.body.ability1) {
    abilities.push(req.body.ability1);
  }
  if (req.body.ability2) {
    abilities.push(req.body.ability2);
  }
  if (req.body.ability3) {
    abilities.push(req.body.ability3);
  }
  if (req.body.ability4) {
    abilities.push(req.body.ability4);
  }

  let newParameters = {
    alias: req.body.alias,
    identity: req.body.identity,
    description: req.body.description,
    icon: req.body.icon,
    model: req.body.model,
    photo: req.body.photo,
    abilities: abilities,
  };

  console.log("Here are abilities parameter after congregation", abilities);

  Avenger.updateOne({ _id: req.params.id }, newParameters, function (err) {
    if (err) {
      console.log(err);
      console.log("Error updating avenger, redirecting to edit page again");
      return res.redirect(`/avengers/${req.params.id}/edit`);
    }
    res.redirect(`/avengers/${req.params.id}`);
  });
}

//adding avenger to a mission

module.exports = {
  index,
  new: newAvenger,
  add,
  delete: deleteAvenger,
  show,
  edit,
  update,
};

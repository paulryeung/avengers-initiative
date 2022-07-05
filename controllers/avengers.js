const Avenger = require("../models/avenger");

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

  //seperate abilities by comma into array elements
  req.body.abilities = req.body.abilities.split(",");
  console.log("Here are form parameters after split", req.body);

  let newAvenger = Avenger(req.body);
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
    res.render("avengers/show", { avenger });
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

  Avenger.updateOne({ _id: req.params.id }, req.body, function (err) {
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

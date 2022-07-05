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

//adding avenger to a mission

module.exports = {
  index,
  new: newAvenger,
  add,
  delete: deleteAvenger,
  show,
};

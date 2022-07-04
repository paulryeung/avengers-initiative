const Avenger = require("../models/avenger");

//main list of avengers page
function index(req, res) {
  console.log("Made it to Index");
  Avenger.find({}, function (err, avengers) {
    res.render("avengers/index", { avengers });
  });
}

//page for new avengers
function newAvenger(req, res) {
  //find all the avengers and pass it

  res.render("avengers/new");
}

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

module.exports = {
  index,
  new: newAvenger,
  add,
};

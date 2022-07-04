const Avenger = require("../models/avenger");

//main list of avengers page
function index(req, res) {
  console.log("Made it to Index");
  res.render("avengers/index");
}

//page for new avengers
function newAvenger(req, res) {
  res.render("avengers/new");
}

function add(req, res) {
  console.log("Here are form parameters", req.body);
  res.redirect("/avengers");
}

module.exports = {
  index,
  new: newAvenger,
  add,
};

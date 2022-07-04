const Avenger = require("../models/avenger");

function index(req, res) {
  console.log("Made it to Index");
  res.render("avengers/index");
}

function newAvenger(req, res) {
  console.log("Made it to recruitment form!");
  console.log(req.body);
  res.render("avengers/new");
}

module.exports = {
  index,
  new: newAvenger,
};

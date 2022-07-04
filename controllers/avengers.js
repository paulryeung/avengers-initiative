const Avenger = require("../models/avenger");

function index(req, res) {
  console.log("Made it to Index");
  res.render("avengers/index");
}

module.exports = {
  index,
};

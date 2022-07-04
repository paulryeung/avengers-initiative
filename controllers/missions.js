const mission = require("../models/mission");

function index(req, res) {
  console.log("Made it here to missions index controller");
  res.render("missions/index.ejs");
}

module.exports = {
  index,
};

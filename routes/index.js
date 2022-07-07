var express = require("express");
var router = express.Router();

const resetCtrl = require("../controllers/seeds");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/reset", resetCtrl.runSeeds);

module.exports = router;

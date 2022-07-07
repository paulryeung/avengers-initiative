//Reference material under "promises",W05, D2, Instructors, Mongoose Movies

//intialize database with a bunch of avengers

const Avenger = require("../models/avenger");
const Mission = require("../models/mission");
const data = require("../data");

function runSeeds(req, res) {
  const p1 = Avenger.deleteMany({});
  const p2 = Mission.deleteMany({});

  Promise.all([p1, p2])
    .then((results) => {
      console.log(results);
      const avengerPromise = Avenger.create(data.avengers);
      const missionPromise = Mission.create(data.missions);

      return Promise.all([avengerPromise, missionPromise]);
    })
    .then((results) => {
      console.log(results);
      res.redirect("/avengers");
    });
}

module.exports = {
  runSeeds,
};

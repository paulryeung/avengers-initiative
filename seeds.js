//Reference material under "promises",W05, D2, Instructors, Mongoose Movies

//intialize database with a bunch of avengers
require("./config/database");
const Avenger = require("./models/avenger");
const data = require("./data");

const p1 = Avenger.deleteMany({});

Promise.all([p1])
  .then((results) => {
    console.log(results);
    const avengerPromise = Avenger.create(data.avengers);

    return Promise.all([avengerPromise]);
  })
  .then((results) => {
    console.log(results);
  })
  .then(() => process.exit());

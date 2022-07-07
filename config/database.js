const mongoose = require("mongoose");

//mongodb://127.0.0.1:27017/avengers

//in heroku you use "heroku config set: KEY=VALUE"
//so heroku config:set DATABASE_URL=asdfasdfasdf     NOTE THERE IS NO SPACE BETWEEN config: set!!!

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  UseUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`connected to MongoDB at ${db.host}:${db.port}`);
});

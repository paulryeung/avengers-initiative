const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ultimateSchema = new Schema({
  moveName: String,
  gif: String,
  moveDescription: String,
});

//will add missions later
const avengerSchema = new Schema({
  alias: String,
  identity: String,
  description: String,
  icon: String,
  photo: String,
  abilities: [],
  ultimate: [ultimateSchema],
});

module.exports = mongoose.model("Avengers", avengerSchema);

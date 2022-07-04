const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ultimateSchema = new Schema({
  moveName: String,
  gif: String,
  moveDescription: String,
});

//will add missions later
const avengerSchema = new Schema({
  alias: { type: String, default: "Unknown Name" },
  identity: { type: String, default: "Unknown Identity" },
  description: { type: String, default: "No Data Available" },
  icon: { type: String, default: "Photo Unavailable" },
  model: {
    type: String,
    default:
      "https://www.clarksvilleonline.com/wp-content/uploads/2013/05/Photo-Unavailable.jpg",
  },
  photo: {
    type: String,
    default:
      "https://www.clarksvilleonline.com/wp-content/uploads/2013/05/Photo-Unavailable.jpg",
  },
  abilities: { type: [String], default: ["Unknown Abilities"] },
  ultimate: [ultimateSchema],
});

module.exports = mongoose.model("Avengers", avengerSchema);

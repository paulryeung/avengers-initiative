const { SchemaTypes } = require("mongoose");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const missionSchema = new Schema({
  codename: String,
  objective: String,
  location: String,
  team: [{ type: SchemaTypes.ObjectId, ref: "Avengers" }],
});

module.exports = mongoose.model("Mission", missionSchema);

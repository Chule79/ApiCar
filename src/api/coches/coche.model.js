const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const cocheSchema = new mongoose.Schema(
  {
    brand: { type: String, require:true},
    model: {type: String, require:true},
    numregistration: {type: String, require:true, unique: true},
    year: {type: Number}
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('coches', cocheSchema)
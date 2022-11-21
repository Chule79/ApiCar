const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);
//Se encripta la pass antes de guardar
userSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, 16)
    next()
})

module.exports = mongoose.model("users", userSchema)

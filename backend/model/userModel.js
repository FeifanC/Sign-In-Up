const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, require: [true, "please add a name"] },
  email: { type: String, require: [true, "please add an email"], unique: true },
  password: { type: String, require: [true, "please add a password"] },
}, {timestamps: true});


module.exports = mongoose.model("User", userSchema)
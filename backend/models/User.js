const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  naverId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profileImage: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
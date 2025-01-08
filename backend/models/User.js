const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  User_ID: { type: String, required: true },
  User_NICKNAME: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
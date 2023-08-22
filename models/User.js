const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const cookie = require("cookie");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: { type: String, required: [true, "Email is required"], unique: true },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [6, "Password should be at least 6 character"],
  },
});



const User = mongoose.model("User", userSchema);
module.exports = User;

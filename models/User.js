const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
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

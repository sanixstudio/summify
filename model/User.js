const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    min: [6, "Password should be at least 6 character"],
  },
});

// Hash password before saving
userSchema.pre("save", async (next) => {
  if (!this.isModified()) return next();
});

userSchema.method.comparePassword;

const User = mongoose.model("User", userSchema);
module.exports = User;

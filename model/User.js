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

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified()) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Match password
userSchema.method.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Sign Token
userSchema.method.getSignToken = function (res) {
  const accessToken = JWT.sign(
    { id: this._id },
    process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: process.env.JWT_ACCESS_EXPIREIN,
    }
  );

  const refreshToken = JWT.sign(
    { id: this._id },
    process.env.JWT_REFRESH_TOKEN,
    {
      expiresIn: process.env.JWT_REFRESH_EXPIREIN,
    }
  );

 // Send token as cookie 
  res.cookie("refreshToken", `${refreshToken}`, {
    maxAge: 86400 * 700,
    httpOnly: true,
  });
};

const User = mongoose.model("User", userSchema);
module.exports = User;

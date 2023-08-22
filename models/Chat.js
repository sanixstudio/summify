const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  message: { type: String },
  timestamp: { type: Date, default: Date.now },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;

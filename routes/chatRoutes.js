const express = require("express");
const Chat = require("../models/Chat");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// SAVE CHATS
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { userId, message } = req.body;

    // Check if userId and message are provided
    if (!userId || !message) {
      return res
        .status(400)
        .json({ message: "userId and message are required." });
    }

    const chat = new Chat({
      userId: req.user._id,
      message,
    });

    await chat.save();

    res.status(201).json({ message: "Chat saved successfully." });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

// GET CHATS
router.get("/", authMiddleware, async (req, res) => {
  try {
    const chats = await Chat.find({ userId: req.user._id }).sort({
      timestamp: -1,
    });
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

// DELETE CHATS
router.delete("/:id", async (req, res) => {
  try {
    const chatId = req.params.id;

    // Find and remove the chat by its ID
    const removedChat = await Chat.findByIdAndRemove(chatId);

    if (!removedChat) {
      return res.status(404).json({ error: "Chat not found." });
    }

    res.status(200).json(removedChat);
  } catch (error) {
    res.status(500).json({ error: "Failed to remove chat." });
  }
});

module.exports = router;

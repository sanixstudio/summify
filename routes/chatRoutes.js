const express = require('express');
const Chat = require('../models/Chat');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// SAVE CHATS
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { message } = req.body;

    const chat = new Chat({
      userId: req.user._id,
      message,
    });

    await chat.save();

    res.status(201).json({ message: 'Chat saved successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// GET CHATS
router.get('/', authMiddleware, async (req, res) => {
  try {
    const chats = await Chat.find({ userId: req.user._id }).sort({ timestamp: -1 });
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
});

module.exports = router;

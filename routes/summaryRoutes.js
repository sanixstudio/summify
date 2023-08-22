const express = require('express');
const Summary = require('../models/Summary');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// SAVE SUMMARIES
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { originalText, summary } = req.body;

    // Check if summary is provided
    if (!summary) {
      return res.status(400).json({ message: 'Summary is required.' });
    }

    const summaryEntry = new Summary({
      userId: req.user._id,
      originalText,
      summary,
    });

    await summaryEntry.save();

    res.status(201).json({ message: 'Summary saved successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// GET SUMMARIES
router.get('/', authMiddleware, async (req, res) => {
  try {
    const summaries = await Summary.find({ userId: req.user._id }).sort({ timestamp: -1 });
    res.json(summaries);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
});

module.exports = router;

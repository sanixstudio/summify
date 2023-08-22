const mongoose = require('mongoose');

const summarySchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  originalText: String,
  summary: String,
  timestamp: { type: Date, default: Date.now },
});

const Summary = mongoose.model('Summary', summarySchema);

module.exports = Summary;

const mongoose = require('mongoose');

const SolutionSchema = new mongoose.Schema({
  question: {
    type: mongoose.Types.ObjectId,
    ref: 'StudentQuestion',
    required: true,
  },
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: 'Auth',
    required: true,
  },
  answerText: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Solution', SolutionSchema);
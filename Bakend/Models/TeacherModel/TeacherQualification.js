const mongoose = require('mongoose');

const TeacherQualificationSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: 'Auth',
    required: true,
    unique: true,
  },
  degree: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
  },
  certification: {
    type: String,
  },
  yearsOfExperience: {
    type: Number,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  verificationStatus: {
    type: String,
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending',
  },
  rejectionReason: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model('TeacherQualification', TeacherQualificationSchema);
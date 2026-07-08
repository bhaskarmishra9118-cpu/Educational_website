const mongoose = require("mongoose");

const StudentQuestionSchema = new mongoose.Schema({
  Subject: {
    type: String,
    required: true,
  },
  TopicName: {
    type: String,
    required: true,
  },
  student: {
    type: mongoose.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  UploadImage: {
    type: String,
  },
  Description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "recording", "awaiting_satisfaction", "completed", "rejected", "answered"],
    default: "pending",
  },
  questionType: {
    type: String,
    enum: ["VIDEO", "LIVE"],
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  recordingStarted: {
    type: Boolean,
    default: false,
  },
  recordingStartedAt: {
    type: Date,
    default: null,
  },
  studentNotified: {
    type: Boolean,
    default: false,
  },
  satisfactionConfirmed: {
    type: Boolean,
    default: false,
  },
  satisfactionConfirmedAt: {
    type: Date,
    default: null,
  },
  studentMessage: {
    type: String,
    default: null,
  },
  teacherMessage: {
    type: String,
    default: null,
  },
  teacherLink: {
    type: String,
    default: null,
  },
  price: {
    type: Number,
    required: true,
  },
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: "Auth",
    default: null,
  },
  answerText: {
    type: String,
    default: null,
  },
  videoUrl: {
    type: String,
    default: null,
  },
}, { timestamps: true });

module.exports = mongoose.model("StudentQuestion", StudentQuestionSchema);

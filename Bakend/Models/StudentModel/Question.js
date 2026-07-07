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
    enum: ["pending", "answered", "rejected"],
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

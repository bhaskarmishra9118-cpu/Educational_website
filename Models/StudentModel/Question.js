const mongoose = require(mongoose);

const StudentQuestionSchema = new mongoose.Schema({
  Subject: {
    type: String,
    required: true,
  },
  TopicName: {
    type: String,
    required: true,
  },
  Student: {
    type: mongoose.Types.ObjectId,
    ref: "Auth_Schema",
  },
  Title: {
    type: String,
    required: true,
  },
  UploadImage: {
    type: String,
    required: true,
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
    enum: ["VIDEO","LIVE"],
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  
  Teacher :{
    type: mongoose.Types.ObjectId,
    ref: "Auth_Schema",
    default: null,
  },
});

module.exports = mongoose.model("StudentQuestion", StudentQuestionSchema);

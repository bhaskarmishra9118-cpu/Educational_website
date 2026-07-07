const mongoose = require("mongoose");

const StudentProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Auth",
    required: true,
    unique: true,
  },
  cityName: {
    type: String,
    required: true,
  },
  stateName: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
  },
});

module.exports = mongoose.model("StudentProfile", StudentProfileSchema);
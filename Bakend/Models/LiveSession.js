const mongoose = require("mongoose");

const LiveSessionSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth",
      required: true,
    },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Auth" },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "completed"],
      default: "pending",
    },
    scheduledAt: { type: Date },
    price: { type: Number, default: 0 },
    durationMinutes: { type: Number },
    videoUrl: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model("LiveSession", LiveSessionSchema);

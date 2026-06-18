const LiveSession = require("../Models/LiveSession");

exports.createRequest = async (req, res) => {
  try {
    const { teacherId, scheduledAt, price, durationMinutes } = req.body;
    const session = await LiveSession.create({
      student: req.user.id,
      teacher: teacherId,
      scheduledAt,
      price,
      durationMinutes
    });
    res.status(201).json({ success: true, session });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

exports.teacherRespond = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { action } = req.body; // 'accept' or 'reject'
    const session = await LiveSession.findById(sessionId);
    if (!session) return res.status(404).json({ message: "Session not found" });
    if (String(session.teacher) !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }
    session.status = action === "accept" ? "accepted" : "rejected";
    await session.save();
    res.status(200).json({ success: true, session });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

exports.uploadVideoSolution = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { videoUrl } = req.body;
    const session = await LiveSession.findById(sessionId);
    if (!session) return res.status(404).json({ message: "Session not found" });
    if (String(session.teacher) !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }
    session.videoUrl = videoUrl;
    await session.save();
    res.status(200).json({ success: true, session });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};
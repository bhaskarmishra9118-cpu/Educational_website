const Question = require("../Models/StudentModel/Question");

exports.createQuestion = async (req, res) => {
  const { Subject, TopicName, Title, Description, questionType, price } = req.body;
  if (!Subject || !TopicName || !Title || !Description || !price || !questionType) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const question = await Question.create({
      student: req.user.id,
      Subject,
      TopicName,
      Title,
      Description,
      questionType,
      price,
    });

    res.status(201).json({ success: true, question });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStudentQuestions = async (req, res) => {
  try {
    const questions = await Question.find({ student: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, questions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTeacherQuestions = async (req, res) => {
  try {
    const questions = await Question.find({
      status: { $in: ["pending", "recording", "awaiting_satisfaction"] },
    }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, questions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.questionId);
    if (!question) return res.status(404).json({ message: "Question not found" });
    if (req.user.role === "student" && String(question.student) !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }
    res.status(200).json({ success: true, question });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.assignQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.questionId);
    if (!question) return res.status(404).json({ message: "Question not found" });
    if (question.status === "completed") {
      return res.status(400).json({ message: "This question is already completed." });
    }

    question.status = "recording";
    question.teacher = req.user.id;
    question.recordingStarted = true;
    question.recordingStartedAt = new Date();
    question.studentNotified = true;
    question.studentMessage = "Your teacher has started recording a video solution for you.";
    question.paymentStatus = "pending";
    await question.save();

    res.status(200).json({
      success: true,
      question,
      message: "Recording started. The student has been notified.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.answerQuestion = async (req, res) => {
  try {
    const { answerText, videoUrl } = req.body;
    const question = await Question.findById(req.params.questionId);
    if (!question) return res.status(404).json({ message: "Question not found" });
    if (String(question.teacher) !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    if (!answerText && !videoUrl) {
      return res.status(400).json({ message: "Please provide an answer or video link." });
    }

    question.answerText = answerText || question.answerText;
    question.videoUrl = videoUrl || question.videoUrl;
    question.status = "awaiting_satisfaction";
    question.teacherMessage = answerText || null;
    question.teacherLink = videoUrl || null;
    question.studentMessage = answerText
      ? `The teacher shared this message: ${answerText} `
      : "The teacher has shared a video/answer for you. Please confirm if you are satisfied to release the payment.";
    if (videoUrl) {
      question.studentMessage += ` Open the provided link: ${videoUrl}`;
    }
    question.paymentStatus = "pending";
    await question.save();

    res.status(200).json({ success: true, question });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.confirmSatisfaction = async (req, res) => {
  try {
    const question = await Question.findById(req.params.questionId);
    if (!question) return res.status(404).json({ message: "Question not found" });
    if (String(question.student) !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    question.status = "completed";
    question.paymentStatus = "completed";
    question.satisfactionConfirmed = true;
    question.satisfactionConfirmedAt = new Date();
    question.studentMessage = "You confirmed the solution and the teacher has been paid.";
    await question.save();

    res.status(200).json({
      success: true,
      question,
      message: "Payment released after your confirmation.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
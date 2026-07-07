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
    const questions = await Question.find({ status: "pending" }).sort({ createdAt: -1 });
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
    question.status = "answered";
    question.teacher = req.user.id;
    await question.save();
    res.status(200).json({ success: true, question });
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
    question.answerText = answerText || question.answerText;
    question.videoUrl = videoUrl || question.videoUrl;
    question.status = "answered";
    await question.save();
    res.status(200).json({ success: true, question });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
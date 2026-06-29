const Question = require("../Models/StudentModel/Question");

const QuestionMiddleware = async (req, res, next) => {
  const { questionId } = req.params;
  const question = await Question.findById(questionId);
  if (!question) {
    return res.status(404).json({ message: "Question not found" });
  }
  if(req.user.role === "student" && String(question.student) !== String(req.user._id)) {
    return res.status(403).json({ message: "Access Denied" });
  }
  req.question = question;
  next();
};

module.exports = { QuestionMiddleware };
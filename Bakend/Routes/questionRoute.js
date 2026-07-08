const express = require("express");
const router = express.Router();
const { AuthMiddleware } = require("../Middlewares/AuthMiddleware");
const {
  createQuestion,
  getStudentQuestions,
  getTeacherQuestions,
  getQuestionById,
  assignQuestion,
  answerQuestion,
  confirmSatisfaction,
} = require("../Controllers/Question");

router.post("/", AuthMiddleware, createQuestion);
router.get("/student", AuthMiddleware, getStudentQuestions);
router.get("/teacher", AuthMiddleware, getTeacherQuestions);
router.get("/:questionId", AuthMiddleware, getQuestionById);
router.patch("/:questionId/assign", AuthMiddleware, assignQuestion);
router.patch("/:questionId/answer", AuthMiddleware, answerQuestion);
router.patch("/:questionId/confirm-satisfaction", AuthMiddleware, confirmSatisfaction);

module.exports = router;

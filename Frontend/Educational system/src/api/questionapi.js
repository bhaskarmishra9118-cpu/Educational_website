import api from "./axios";

export const createQuestion = (data) => {
  return api.post("/api/questions", data);
};

export const getStudentQuestions = () => {
  return api.get("/api/questions/student");
};

export const getTeacherQuestions = () => {
  return api.get("/api/questions/teacher");
};

export const answerQuestion = (questionId, data) => {
  return api.patch(`/api/questions/${questionId}/answer`, data);
};

export const assignQuestion = (questionId) => {
  return api.patch(`/api/questions/${questionId}/assign`);
};

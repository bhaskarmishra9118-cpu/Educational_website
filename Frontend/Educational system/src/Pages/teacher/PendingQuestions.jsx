import { useEffect, useState } from "react";
import { getTeacherQuestions, assignQuestion, answerQuestion } from "../../api/questionapi";

const PendingQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await getTeacherQuestions();
        setQuestions(res.data.questions);
      } catch (err) {
        setError(err.response?.data?.message || "Unable to fetch questions.");
      }
    };

    fetchQuestions();
  }, []);

  const handleAccept = async (questionId) => {
    try {
      await assignQuestion(questionId);
      setQuestions((prev) => prev.filter((question) => question._id !== questionId));
    } catch (err) {
      setError(err.response?.data?.message || "Unable to assign question.");
    }
  };

  const handleAnswer = async (questionId) => {
    const answerText = prompt("Enter your answer");
    if (!answerText) return;
    try {
      await answerQuestion(questionId, { answerText });
      setQuestions((prev) => prev.filter((question) => question._id !== questionId));
    } catch (err) {
      setError(err.response?.data?.message || "Unable to submit answer.");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Pending Questions</h2>
      {error && <div className="rounded bg-red-100 p-4 text-red-700">{error}</div>}
      {questions.length === 0 ? (
        <p className="text-slate-600">No pending questions at this time.</p>
      ) : (
        <div className="space-y-4">
          {questions.map((question) => (
            <div key={question._id} className="rounded-lg border p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{question.Title}</h3>
                <span className="text-sm text-slate-500">{question.questionType}</span>
              </div>
              <p className="mt-2 text-slate-700">{question.Description}</p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => handleAccept(question._id)}
                  className="rounded bg-green-600 px-3 py-2 text-white hover:bg-green-700"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleAnswer(question._id)}
                  className="rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
                >
                  Answer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PendingQuestions;

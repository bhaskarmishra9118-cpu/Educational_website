import { useEffect, useState } from "react";
import { getStudentQuestions, confirmSatisfaction } from "../../api/questionapi";

const MyQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await getStudentQuestions();
        setQuestions(res.data.questions);
      } catch (err) {
        setError(err.response?.data?.message || "Unable to load questions.");
      }
    };

    fetchQuestions();
  }, []);

  const handleConfirmSatisfaction = async (questionId) => {
    const selectedQuestion = questions.find((question) => question._id === questionId);

    try {
      const res = await confirmSatisfaction(questionId);
      if (res.data.success) {
        const currentEarnings = Number(localStorage.getItem("teacherEarnings") || 0);
        const amount = Number(selectedQuestion?.price || 0);
        localStorage.setItem("teacherEarnings", String(currentEarnings + amount));
      }

      setQuestions((prev) =>
        prev.map((question) =>
          question._id === questionId ? { ...question, ...res.data.question } : question,
        ),
      );
    } catch (err) {
      setError(err.response?.data?.message || "Unable to confirm satisfaction.");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">My Questions</h2>
      {error && <div className="rounded bg-red-100 p-4 text-red-700">{error}</div>}
      {questions.length === 0 ? (
        <p className="text-slate-600">No questions submitted yet.</p>
      ) : (
        <div className="space-y-4">
          {questions.map((question) => (
            <div key={question._id} className="rounded-lg border p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{question.Title}</h3>
                <span className="text-sm text-slate-500">{question.status}</span>
              </div>
              <p className="mt-2 text-slate-700">{question.Description}</p>
              <div className="mt-3 text-sm text-slate-500">
                Type: {question.questionType} • Price: ${question.price}
              </div>
              {question.studentMessage && (
                <div className="mt-3 rounded bg-slate-50 p-3 text-sm text-slate-700">
                  <p>{question.studentMessage}</p>
                  {question.teacherLink && (
                    <a
                      href={question.teacherLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block font-medium text-blue-600 hover:underline"
                    >
                      Open shared link
                    </a>
                  )}
                </div>
              )}
              {question.status === "awaiting_satisfaction" && (
                <button
                  onClick={() => handleConfirmSatisfaction(question._id)}
                  className="mt-3 rounded bg-green-600 px-3 py-2 text-white hover:bg-green-700"
                >
                  Confirm Satisfaction
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyQuestions;

import { useEffect, useState } from "react";
import { getStudentQuestions } from "../../api/questionapi";

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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyQuestions;

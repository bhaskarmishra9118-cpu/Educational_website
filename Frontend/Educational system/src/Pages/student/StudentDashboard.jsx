import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h1 className="text-2xl font-semibold">Welcome, {user?.name || "Student"}</h1>
        <p className="mt-2 text-slate-600">
          Use the sidebar to ask a question, review your submissions, and update your profile.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Link
          to="/student/ask-question"
          className="rounded-lg bg-blue-600 p-6 text-white shadow hover:bg-blue-700"
        >
          Ask a New Question
        </Link>
        <Link
          to="/student/my-questions"
          className="rounded-lg bg-slate-100 p-6 text-slate-700 shadow hover:bg-slate-200"
        >
          My Questions
        </Link>
        <Link
          to="/student/profile"
          className="rounded-lg bg-slate-100 p-6 text-slate-700 shadow hover:bg-slate-200"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default StudentDashboard;

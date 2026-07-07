import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h1 className="text-2xl font-semibold">Welcome, {user?.name || "Teacher"}</h1>
        <p className="mt-2 text-slate-600">
          Use the sidebar to review pending questions and manage your earnings.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Link
          to="/teacher/questions"
          className="rounded-lg bg-blue-600 p-6 text-white shadow hover:bg-blue-700"
        >
          Pending Questions
        </Link>
        <Link
          to="/teacher/earnings"
          className="rounded-lg bg-slate-100 p-6 text-slate-700 shadow hover:bg-slate-200"
        >
          Earnings
        </Link>
      </div>
    </div>
  );
};

export default TeacherDashboard;

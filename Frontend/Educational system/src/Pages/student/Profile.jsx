import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const isTeacher = user?.role === "teacher";

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">My Profile</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-sm text-slate-500">Name</p>
          <p className="mt-1 text-lg font-medium">{user?.name}</p>
        </div>
        <div>
          <p className="text-sm text-slate-500">Email</p>
          <p className="mt-1 text-lg font-medium">{user?.email}</p>
        </div>
        <div>
          <p className="text-sm text-slate-500">Account Type</p>
          <div
            className={`mt-1 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
              isTeacher
                ? "bg-amber-100 text-amber-700"
                : "bg-emerald-100 text-emerald-700"
            }`}
          >
            {isTeacher ? "Teacher Account" : "Student Account"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

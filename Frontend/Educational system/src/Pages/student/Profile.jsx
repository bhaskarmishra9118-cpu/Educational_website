import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

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
          <p className="text-sm text-slate-500">Role</p>
          <p className="mt-1 text-lg font-medium">{user?.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

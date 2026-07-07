import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-sm">
      <div className="text-xl font-semibold">Edusolve</div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-700">{user?.name || "Guest"}</span>
        {user?.profileImage && (
          <img src={user.profileImage} alt="Profile" className="h-10 w-10 rounded-full object-cover" />
        )}
        <button
          onClick={handleLogout}
          className="rounded bg-blue-500 px-3 py-2 text-white hover:bg-blue-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default NavBar;

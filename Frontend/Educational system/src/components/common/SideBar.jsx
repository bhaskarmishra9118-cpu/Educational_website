import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { menus } from "./MenuConfig";

const SideBar = () => {
  const { user } = useSelector((state) => state.auth);
  const role = user?.role;
  const items = menus[role] || [];

  return (
    <aside className="w-60 border-r bg-white p-4">
      <div className="mb-6">
        <div className="text-lg font-semibold">{user?.name || "User"}</div>
        <div className="text-sm text-slate-500">{user?.email}</div>
      </div>
      <ul className="space-y-2">
        {items.map((menu, index) => (
          <li key={index}>
            <Link
              to={menu.path}
              className="block rounded px-3 py-2 text-slate-700 hover:bg-slate-100"
            >
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;

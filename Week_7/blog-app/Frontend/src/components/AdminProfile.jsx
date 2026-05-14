import { NavLink, Outlet, useNavigate } from "react-router";
import { useAuth } from "../store/authStore";
import { pageWrapper, navLinkClass, divider } from "../styles/common";

function AdminProfile() {
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className={pageWrapper}>
      {/* Header section */}
      <div className="bg-blue-800 text-white border rounded-3xl p-6 mb-8 shadow-md flex justify-between items-center font-sans">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <button
          className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

      {/* Navigation tabs */}
      <div className="flex gap-3 mb-6 bg-blue-100 p-2 rounded-full w-fit font-sans">
        <NavLink
          to="users"
          className={({ isActive }) =>
            isActive
              ? "bg-white px-5 py-2 rounded-full text-blue-700 font-semibold"
              : `${navLinkClass} px-5 py-2 text-blue-800`
          }
        >
          Users
        </NavLink>
        <NavLink
          to="authors"
          className={({ isActive }) =>
            isActive
              ? "bg-white px-5 py-2 rounded-full text-blue-700 font-semibold"
              : `${navLinkClass} px-5 py-2 text-blue-800`
          }
        >
          Authors
        </NavLink>
        <NavLink
          to="articles"
          className={({ isActive }) =>
            isActive
              ? "bg-white px-5 py-2 rounded-full text-blue-700 font-semibold"
              : `${navLinkClass} px-5 py-2 text-blue-800`
          }
        >
          Articles
        </NavLink>
      </div>

      <div className={divider}></div>
      <Outlet />
    </div>
  );
}

export default AdminProfile;

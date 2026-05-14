import { NavLink, Outlet, useNavigate } from "react-router";
import { useAuth } from "../store/authStore";
import { pageWrapper, navLinkClass, divider } from "../styles/common";

function AuthorProfile() {
  const currentUser = useAuth((state) => state.currentUser);
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className={pageWrapper}>
      {/* PROFILE HEADER */}
      <div className="bg-blue-50 border border-blue-200 rounded-3xl p-6 mb-8 shadow-sm flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          {currentUser?.profileImageUrl ? (
            <img
              src={currentUser.profileImageUrl}
              className="w-16 h-16 rounded-full object-cover border"
              alt="profile"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl font-semibold">
              {currentUser?.firstName?.charAt(0).toUpperCase()}
            </div>
          )}

          {/* Name */}
          <div>
            <p className="text-sm text-blue-600">Welcome back</p>
            <h2 className="text-xl font-semibold text-blue-900">
              {currentUser?.firstName}
            </h2>
          </div>
        </div>

        {/* LOGOUT */}
        <button
          className="bg-red-600 text-white text-sm px-5 py-2 rounded-full hover:bg-red-700 transition font-semibold"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

      {/* NAVIGATION (TABS STYLE) */}
      <div className="flex gap-3 mb-6 bg-blue-100 p-2 rounded-full w-fit">
        <NavLink
          to="articles"
          className={({ isActive }) =>
            isActive
              ? "bg-white px-5 py-2 rounded-full text-blue-700 text-sm font-medium shadow-sm"
              : `${navLinkClass} px-5 py-2 text-blue-800`
          }
        >
          Articles
        </NavLink>

        <NavLink
          to="write-article"
          className={({ isActive }) =>
            isActive
              ? "bg-white px-5 py-2 rounded-full text-blue-700 text-sm font-medium shadow-sm"
              : `${navLinkClass} px-5 py-2 text-blue-800`
          }
        >
          Write Article
        </NavLink>
      </div>

      <div className={divider}></div>

      {/* CONTENT */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthorProfile;

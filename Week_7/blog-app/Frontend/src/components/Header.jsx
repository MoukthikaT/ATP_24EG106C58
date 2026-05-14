import { NavLink } from "react-router";
import { useAuth } from "../store/authStore";

function Header() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const user = useAuth((state) => state.currentUser);

  // Decide profile route based on role
  const getProfilePath = () => {
    if (!user) return "/";
    switch (user.role) {
      case "AUTHOR":
        return "/author-profile";
      case "ADMIN":
        return "/admin-profile";
      default:
        return "/user-profile";
    }
  };

  return (
    <nav className="bg-blue-800 text-white shadow-lg font-sans">
      <div className="flex justify-between items-center px-6 py-4">
        {/* LOGO */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-blue-100"
        >
          Knowledge Nest
        </NavLink>

        {/* NAV LINKS */}
        <ul className="flex gap-6 text-lg">
          {/* HOME */}
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-blue-300 font-semibold border-b-2 border-blue-300 pb-1"
                  : "text-blue-100"
              }
            >
              Home
            </NavLink>
          </li>

          {/* NOT LOGGED IN */}
          {!isAuthenticated && (
            <>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-300 font-semibold border-b-2 border-blue-300 pb-1"
                      : "text-blue-100"
                  }
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-300 font-semibold border-b-2 border-blue-300 pb-1"
                      : "text-blue-100"
                  }
                >
                  Login
                </NavLink>
              </li>
            </>
          )}

          {/* LOGGED IN */}
          {isAuthenticated && (
            <li>
              <NavLink
                to={getProfilePath()}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-300 font-semibold border-b-2 border-blue-300 pb-1"
                    : "text-blue-100"
                }
              >
                Profile
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;

import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-end text-2xl p-7 bg-blue-900 text-white gap-6">
      <NavLink to="" className={({ isActive }) => (isActive ? "text-yellow-400 p-2 border-2 border-white rounded-3xl" : "")}>
        Home
      </NavLink>
      <NavLink to="create-emp" className={({ isActive }) => (isActive ? "text-yellow-400 p-2 border-2 border-white rounded-3xl" : "")}>
        CreateEmp
      </NavLink>
      <NavLink to="list" className={({ isActive }) => (isActive ? "text-yellow-400 p-2 border-2 border-white rounded-3xl" : "")}>
        List of Employees
      </NavLink>
    </nav>
  );
}

export default Header;
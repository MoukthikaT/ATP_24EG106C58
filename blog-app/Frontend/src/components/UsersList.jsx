import { useEffect, useState } from "react";
import axios from "axios";
import { errorClass, loadingClass } from "../styles/common";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        let res = await axios.get("https://blogapp-backend-knhz.onrender.com/admin-api/users", {
          withCredentials: true,
        });
        setUsers(res.data.payload);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`https://blogapp-backend-knhz.onrender.com/admin-api/users/${id}`, {
        withCredentials: true,
      });
      setUsers(users.filter((u) => u._id !== id));
    } catch (err) {
      setError(err.response?.data?.error || "Failed to delete user");
    }
  };

  if (loading) return <p className={loadingClass}>Loading users...</p>;
  if (error) return <p className={errorClass}>{error}</p>;

  return (
    <div>
      <h3 className="text-2xl font-bold text-blue-800 mb-6">All Users</h3>
      <ul>
        {users.map((user) => (
          <li
            key={user._id}
            className="flex justify-between items-center border border-blue-200 p-3 mb-2 rounded-xl bg-blue-50"
          >
            <span className="text-blue-900 font-medium">
              {user.email} ({user.role})
            </span>
            <button
              className="bg-red-600 text-white px-3 py-1 rounded-full font-semibold hover:bg-red-700 transition"
              onClick={() => deleteUser(user._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;

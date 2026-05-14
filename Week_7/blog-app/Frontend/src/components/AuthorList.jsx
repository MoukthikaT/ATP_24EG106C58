import { useEffect, useState } from "react";
import axios from "axios";
import { errorClass, loadingClass } from "../styles/common";

function AuthorList() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAuthors = async () => {
      setLoading(true);
      try {
        let res = await axios.get("https://blogapp-backend-knhz.onrender.com/admin-api/authors", {
          withCredentials: true,
        });
        setAuthors(res.data.payload);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch authors");
      } finally {
        setLoading(false);
      }
    };
    getAuthors();
  }, []);

  const deleteAuthor = async (id) => {
    if (!window.confirm("Are you sure you want to delete this author?")) return;
    try {
      await axios.delete(`https://blogapp-backend-knhz.onrender.com/admin-api/users/${id}`, {
        withCredentials: true,
      });
      setAuthors(authors.filter((a) => a._id !== id));
    } catch (err) {
      setError(err.response?.data?.error || "Failed to delete author");
    }
  };

  if (loading) return <p className={loadingClass}>Loading authors...</p>;
  if (error) return <p className={errorClass}>{error}</p>;

  return (
    <div>
      <h3 className="text-2xl font-bold text-blue-800 mb-6">All Authors</h3>
      <ul>
        {authors.map((author) => (
          <li
            key={author._id}
            className="flex justify-between items-center border border-blue-200 p-3 mb-2 rounded-xl bg-blue-50"
          >
            <span className="text-blue-900 font-medium">
              {author.email} ({author.role})
            </span>
            <button
              className="bg-red-600 text-white px-3 py-1 rounded-full font-semibold"
              onClick={() => deleteAuthor(author._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorList;

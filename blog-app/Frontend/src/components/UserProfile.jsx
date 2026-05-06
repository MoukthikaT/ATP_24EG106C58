import { useAuth } from "../store/authStore";
import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

import {
  articleGrid,
  articleCardClass,
  articleTitle,
  ghostBtn,
  loadingClass,
  errorClass,
  timestampClass,
} from "../styles/common.js";

function UserProfile() {
  const logout = useAuth((state) => state.logout);
  const currentUser = useAuth((state) => state.currentUser);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        let res = await axios.get("http://localhost:4000/user-api/articles", {
          withCredentials: true,
        });
        if (res.status === 200) {
          setArticles(res.data.payload);
        }
      } catch (err) {
        setError(err.response?.data?.error || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, []);

  const formatDateIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  const navigateToArticleByID = (articleObj) => {
    navigate(`/article/${articleObj._id}`, {
      state: articleObj,
    });
  };

  if (loading) {
    return <p className={loadingClass}>Loading articles...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {error && <p className={errorClass}>{error}</p>}

      {/* PROFILE HEADER */}
      <div className="bg-blue-50 border border-blue-200 rounded-3xl p-6 mb-8 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          {currentUser?.profileImageUrl ? (
            <img
              src={currentUser.profileImageUrl}
              className="w-16 h-16 rounded-full object-cover border border-blue-300"
              alt="profile"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl font-semibold">
              {currentUser?.firstName?.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <p className="text-sm text-blue-600">Welcome back</p>
            <h2 className="text-xl font-semibold text-blue-900">
              {currentUser?.firstName}
            </h2>
          </div>
        </div>
        <button
          className="bg-red-600 text-white text-sm px-5 py-2 rounded-full hover:bg-red-700 transition font-semibold"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

      {/* ARTICLES SECTION */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">
          Latest Articles
        </h3>

        {articles.length === 0 ? (
          <p className="text-blue-600 text-sm text-center py-10">
            No articles available yet
          </p>
        ) : (
          <div className={articleGrid}>
            {articles.map((articleObj) => (
              <div
                className={`${articleCardClass} border border-blue-200 hover:shadow-md transition`}
                key={articleObj._id}
              >
                <div className="flex flex-col h-full">
                  <div>
                    <p className={`${articleTitle} text-blue-900`}>
                      {articleObj.title}
                    </p>
                    <p className="text-sm text-blue-700 mt-1">
                      {articleObj.content.slice(0, 80)}...
                    </p>
                    <p className={`${timestampClass} mt-2`}>
                      {formatDateIST(articleObj.createdAt)}
                    </p>
                  </div>
                  <button
                    className={`${ghostBtn} mt-auto pt-4 text-blue-700 hover:text-blue-900`}
                    onClick={() => navigateToArticleByID(articleObj)}
                  >
                    Read Article →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;

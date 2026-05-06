import { useEffect, useState } from "react";
import axios from "axios";
import { errorClass, loadingClass } from "../styles/common";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

function AdminArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch all articles
  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        let res = await axios.get("http://localhost:4000/admin-api/articles", {
          withCredentials: true,
        });
        setArticles(res.data.payload);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, []);

  // Toggle block/unblock
  const toggleArticleStatus = async (id, currentStatus) => {
    try {
      await axios.patch(
        `http://localhost:4000/admin-api/articles/${id}`,
        { isArticleActive: !currentStatus },
        { withCredentials: true }
      );
      setArticles(
        articles.map((a) =>
          a._id === id ? { ...a, isArticleActive: !currentStatus } : a
        )
      );
      toast.success(
        `Article ${currentStatus ? "blocked" : "unblocked"} successfully`
      );
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to update article");
    }
  };

  // Navigate to article detail page
  const viewArticle = (articleObj) => {
    navigate(`/admin/article/${articleObj._id}`, { state: articleObj });
  };

  if (loading) return <p className={loadingClass}>Loading articles...</p>;
  if (error) return <p className={errorClass}>{error}</p>;

  return (
    <div className="font-sans">
      <h3 className="text-2xl font-bold text-blue-800 mb-6">All Articles</h3>
      <ul>
        {articles.map((article) => (
          <li
            key={article._id}
            className="flex justify-between items-center border border-blue-200 p-4 mb-3 rounded-xl bg-blue-50"
          >
            <div>
              <p className="font-semibold text-blue-900">{article.title}</p>
              <p className="text-sm text-blue-600">
                By {article.author?.email}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 rounded-lg font-semibold bg-blue-700 text-white"
                onClick={() => viewArticle(article)}
              >
                View
              </button>
              <button
                className={`px-4 py-2 rounded-lg font-semibold ${
                  article.isArticleActive
                    ? "bg-red-600 text-white"
                    : "bg-green-600 text-white"
                }`}
                onClick={() =>
                  toggleArticleStatus(article._id, article.isArticleActive)
                }
              >
                {article.isArticleActive ? "Block" : "Unblock"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminArticles;

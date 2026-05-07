import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

import {
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  loadingClass,
} from "../styles/common";
import { useAuth } from "../store/authStore";

function WriteArticles() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth((state) => state.currentUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitArticle = async (articleObj) => {
    setLoading(true);
    articleObj.author = currentUser._id;
    try {
      let res = await axios.post(
        "https://blogapp-backend-knhz.onrender.com/author-api/article",
        articleObj,
        { withCredentials: true }
      );
      if (res.status === 201) {
        toast.success("Article published successfully!");
        navigate("../articles");
        reset();
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to publish article");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${formCard} border border-blue-200 bg-blue-50 shadow-md`}>
      <h2 className={`${formTitle} text-blue-800`}>Write New Article</h2>

      <form onSubmit={handleSubmit(submitArticle)}>
        {/* Title */}
        <div className={formGroup}>
          <label className={`${labelClass} text-blue-700`}>Title</label>
          <input
            type="text"
            className={`${inputClass} focus:ring-blue-500`}
            placeholder="Enter article title"
            {...register("title", {
              required: "Title is required",
              minLength: { value: 5, message: "Title must be at least 5 characters" },
            })}
          />
          {errors.title && <p className={errorClass}>{errors.title.message}</p>}
        </div>

        {/* Category */}
        <div className={formGroup}>
          <label className={`${labelClass} text-blue-700`}>Category</label>
          <select
            className={`${inputClass} focus:ring-blue-500`}
            {...register("category", { required: "Category is required" })}
          >
            <option value="">Select category</option>
            <option value="technology">Technology</option>
            <option value="programming">Programming</option>
            <option value="ai">AI</option>
            <option value="web-development">Web Development</option>
          </select>
          {errors.category && <p className={errorClass}>{errors.category.message}</p>}
        </div>

        {/* Content */}
        <div className={formGroup}>
          <label className={`${labelClass} text-blue-700`}>Content</label>
          <textarea
            rows="8"
            className={`${inputClass} focus:ring-blue-500`}
            placeholder="Write your article content..."
            {...register("content", {
              required: "Content is required",
              minLength: { value: 50, message: "Content must be at least 50 characters" },
            })}
          />
          {errors.content && <p className={errorClass}>{errors.content.message}</p>}
        </div>

        {/* Submit */}
        <button
          className={`${submitBtn} bg-blue-700 text-white hover:bg-blue-800 disabled:bg-blue-400`}
          type="submit"
          disabled={loading}
        >
          {loading ? "Publishing..." : "Publish Article"}
        </button>

        {loading && <p className={`${loadingClass} text-blue-600`}>Publishing article...</p>}
      </form>
    </div>
  );
}

export default WriteArticles;

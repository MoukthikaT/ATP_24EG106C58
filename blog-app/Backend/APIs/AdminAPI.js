import exp from "express";
import { UserModel } from "../Models/UserModel.js";
import { ArticleModel } from "../Models/ArticleModel.js";
import { verifyToken } from "../middlewares/VerifyToken.js";

export const adminApp = exp.Router();

// ✅ Get all users
adminApp.get("/users", verifyToken("ADMIN"), async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ message: "All users", payload: users });
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err.message });
  }
});

// ✅ Get all authors only
adminApp.get("/authors", verifyToken("ADMIN"), async (req, res) => {
  try {
    const authors = await UserModel.find({ role: "AUTHOR" });
    res.status(200).json({ message: "All authors", payload: authors });
  } catch (err) {
    res.status(500).json({ message: "Error fetching authors", error: err.message });
  }
});

// ✅ Delete user/author
adminApp.delete("/users/:id", verifyToken("ADMIN"), async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await UserModel.findByIdAndDelete(id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted", payload: deletedUser });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err.message });
  }
});

// ✅ Get all articles
adminApp.get("/articles", verifyToken("ADMIN"), async (req, res) => {
  try {
    const articles = await ArticleModel.find().populate("author", "email firstName");
    res.status(200).json({ message: "All articles", payload: articles });
  } catch (err) {
    res.status(500).json({ message: "Error fetching articles", error: err.message });
  }
});

// ✅ Block/Unblock article
adminApp.patch("/articles/:id", verifyToken("ADMIN"), async (req, res) => {
  try {
    const { id } = req.params;
    const { isArticleActive } = req.body;

    const article = await ArticleModel.findById(id);
    if (!article) return res.status(404).json({ message: "Article not found" });

    article.isArticleActive = isArticleActive;
    await article.save();

    res.status(200).json({ message: "Article status updated", payload: article });
  } catch (err) {
    res.status(500).json({ message: "Error updating article", error: err.message });
  }
});

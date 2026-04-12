import exp from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { UserModel } from "../models/UserModel.js";
import { ArticleModel } from "../models/ArticleModel.js";

export const adminApp = exp.Router();

// 🔹 Get all users
adminApp.get("/users", verifyToken("ADMIN"), async (req, res) => {
  const users = await UserModel.find({}, "email role isUserActive");
  res.json({ payload: users });
});

// 🔹 Block / Activate user
adminApp.put("/user/:id", verifyToken("ADMIN"), async (req, res) => {
  const user = await UserModel.findById(req.params.id);

  user.isUserActive = !user.isUserActive;
  await user.save();

  res.json({ message: "Updated", payload: user });
});

// 🔹 Get all articles
adminApp.get("/articles", verifyToken("ADMIN"), async (req, res) => {
  const articles = await ArticleModel.find();
  res.json({ payload: articles });
});

// 🔹 Delete article
adminApp.put("/article/:id", verifyToken("ADMIN"), async (req, res) => {
  const article = await ArticleModel.findById(req.params.id);

  article.isArticleActive = false;
  await article.save();

  res.json({ message: "Article removed" });
});
import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

// Import your route modules
import { userApp } from "./APIs/UserAPI.js";
import { authorApp } from "./APIs/AuthorAPI.js";
import { adminApp } from "./APIs/AdminAPI.js";
import { commonApp } from "./APIs/CommonAPI.js";

// Load environment variables
config();

// Create express app
const app = express();

// 🔐 CORS Configuration (IMPORTANT)
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local frontend
      "https://your-frontend-url.vercel.app", // deployed frontend (change later)
    ],
    credentials: true,
  })
);

// Middleware
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/user-api", userApp);
app.use("/author-api", authorApp);
app.use("/admin-api", adminApp);
app.use("/auth", commonApp);

// ------------------- DB CONNECTION -------------------
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.log("DB connection error:", err);
  }
};

connectDB();

// ------------------- INVALID ROUTE -------------------
app.use((req, res) => {
  res.status(404).json({
    message: `Path ${req.url} is invalid`,
  });
});

// ------------------- ERROR HANDLER -------------------
app.use((err, req, res, next) => {
  console.log("Error:", err);

  // Validation Error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation error",
      error: err.message,
    });
  }

  // Cast Error
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
      error: err.message,
    });
  }

  // Duplicate Key Error (MongoDB)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    const value = err.keyValue[field];

    return res.status(409).json({
      message: "Duplicate value",
      error: `${field} "${value}" already exists`,
    });
  }

  // Default server error
  res.status(500).json({
    message: "Server error",
    error: "Something went wrong",
  });
});
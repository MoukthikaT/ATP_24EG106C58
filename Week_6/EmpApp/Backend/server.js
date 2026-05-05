import exp from "express";
import { connect } from "mongoose";
import { empRoute } from "./API/empApp.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = exp();

// ✅ allow all origins (important for Vercel later)
app.use(cors());

// body parser
app.use(exp.json());

// routes
app.use("/emp-api", empRoute);

// ✅ START SERVER FIRST (IMPORTANT)
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

// ✅ CONNECT DB AFTER SERVER STARTS
connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB error:", err.message));

// error middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
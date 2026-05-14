import exp from "express";
import { UserModel } from "../Models/UserModel.js";
import { hash, compare } from "bcryptjs";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middlewares/VerifyToken.js";
const { sign } = jwt;
export const commonApp = exp.Router();
import { upload } from "../config/multer.js";
import { uploadToCloudinary } from "../config/cloudinaryUpload.js";
import cloudinary from "../config/cloudinary.js";
config();

//Route for register
commonApp.post("/users", upload.single("profileImageUrl"), async (req, res, next) => {
  let cloudinaryResult;
  try {
    let allowedRoles = ["USER", "AUTHOR"]; // normal roles
    const newUser = req.body;

    // 👉 Force ADMIN role for your email
    if (newUser.email === "moukthika0605@mail.com") {
      newUser.role = "ADMIN";
    } else {
      // check role for others
      if (!allowedRoles.includes(newUser.role)) {
        return res.status(400).json({ message: "Invalid role" });
      }
    }

    // Upload image to cloudinary
    if (req.file) {
      cloudinaryResult = await uploadToCloudinary(req.file.buffer);
    }
    newUser.profileImageUrl = cloudinaryResult?.secure_url;

    // Hash password
    newUser.password = await hash(newUser.password, 12);

    // Save user
    const newUserDoc = new UserModel(newUser);
    await newUserDoc.save();

    res.status(201).json({ message: "User created" });
  } catch (err) {
    console.log("err is ", err);
    if (cloudinaryResult?.public_id) {
      await cloudinary.uploader.destroy(cloudinaryResult.public_id);
    }
    next(err);
  }
});

//Route for Login (USER, AUTHOR and ADMIN)
commonApp.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email" });
  }

  const isMatched = await compare(password, user.password);
  if (!isMatched) {
    return res.status(400).json({ message: "Invalid password" });
  }

  // 👉 Force ADMIN role for your email
  if (user.email === "moukthika0605@mail.com") {
    user.role = "ADMIN";
  }

  // Create JWT
  const signedToken = sign(
    {
      id: user._id,
      email: email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      profileImageUrl: user.profileImageUrl,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.cookie("token", signedToken, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
});

  let userObj = user.toObject();
  delete userObj.password;

  res.status(200).json({ message: "login success", payload: userObj });
});

//Route for Logout
commonApp.get("/logout", (req, res) => {
  res.clearCookie("token", {
  httpOnly: true,
  secure: true,
  sameSite: "none",
});
  res.status(200).json({ message: "Logout success" });
});

//Page refresh
commonApp.get("/check-auth", verifyToken("USER", "AUTHOR", "ADMIN"), (req, res) => {
  res.status(200).json({
    message: "authenticated",
    payload: req.user,
  });
});

//Change password (to be implemented)
commonApp.put("/password", verifyToken("USER", "AUTHOR", "ADMIN"), async (req, res) => {
  // implement password change logic here
});

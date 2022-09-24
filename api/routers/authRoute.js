import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../middleware/Authmiddleware.js";
import User from "../models/User.js";
import generaToken from "../utils/generateToken.js";
const authRoute = express.Router();

authRoute.post(
  "/login",
  asyncHandler(async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json("Not found user");
      } else {
        if (await user.matchPassword(req.body.password)) {
          return res.status(200).json({
            _id: user._id,
            email: user.email,
            password: user.password,
            token: generaToken(user._id),
            createAt: user.createdAt,
          });
        } else res.status(400).json("wrong password");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  })
);

authRoute.post(
  "/register",
  asyncHandler(async (req, res) => {
    try {
      const newUser = new User(req.body);
      const existEmail = await User.findOne({ email: newUser.email });
      if (existEmail) {
        res.status(400);
        throw new Error("Email Exist");
      } else {
        const savedUser = await User.create(newUser);
        res.status(200).json(savedUser);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  })
);

authRoute.get(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      return res.status(200).json({
        _id: user._id,
        email: user.email,
        password: user.password,
        token: generaToken(user._id),
        createAt: user.createdAt,
      });
    } else {
      res.status(400);
      throw new Error("User not found");
    }
  })
);

export default authRoute;

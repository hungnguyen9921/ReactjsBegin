import express from "express";
import User from "../models/User.js";
import asyncHandler from "express-async-handler";
const authRoute = express.Router();

authRoute.post(
  "/login",
  asyncHandler(async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json("Not found");
      } else {
        if (user.password === req.body.password) {
          return res.status(200).json(user);
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
      newUser.username = req.body.email.split("@")[0];
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  })
);

export default authRoute;

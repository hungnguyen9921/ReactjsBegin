import express from "express";
import User from "../models/User.js";
import users from "../data/User.js";
import Product from "../models/Product.js";
import products from "../data/Product.js";
import Category from "../models/Category.js";
import category from "../data/Category.js";
import asyncHandler from "express-async-handler";

const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    try {
      await User.remove({});
      const ImportUser = await User.insertMany(users);
      res.send({ ImportUser });
    } catch (error) {
      console.log(error);
    }
  })
);

ImportData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.remove({});
    const ImportProduct = await Product.insertMany(products);
    res.send({ ImportProduct });
  })
);

ImportData.post(
  "/category",
  asyncHandler(async (req, res) => {
    await Category.remove({});
    const ImportProduct = await Category.insertMany(category);
    res.send({ ImportProduct });
  })
);
export default ImportData;

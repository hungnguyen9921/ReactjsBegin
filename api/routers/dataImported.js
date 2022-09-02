import express from "express";
import User from "../models/User.js";
import users from "../data/User.js";
import Product from "../models/Product.js";
import products from "../data/Product.js";
import asyncHandler from "express-async-handler";

const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.remove({});
    const ImportUser = await User.insertMany(users);
    res.send({ ImportUser });
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

export default ImportData;
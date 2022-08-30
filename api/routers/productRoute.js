import express from "express";
import Product from "../models/Product.js";
import asyncHandler from "express-async-handler";

const productRoute = express.Router();

productRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

export default productRoute;
